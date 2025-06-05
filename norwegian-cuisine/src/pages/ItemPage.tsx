import { useParams } from 'react-router-dom';
import { Item } from '../lib/types';
import { use, useEffect, useState } from 'react';
import '../styling/ItemPage.css';

import ChapterButtons from '../components/NavigationButtons/ChapterButtons';
import ItemButtons from '../components/NavigationButtons/ItemButtons';
import getImageByFileName from '../utils/imageLoader';
import { InfoOutline, QrCode } from '@mui/icons-material';
import QRCode from 'qrcode';
import LoadingAnimation from '../components/Loading/LoadingAnimation';

function ItemPage() {
	const { narrativeId, chapterIndex, itemId } = useParams<{
		narrativeId: string;
		chapterIndex: string;
		itemId: string;
	}>();
	const [item, setItem] = useState<Item>();
	const [theme, setTheme] = useState<string>('nothing');
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') || 'nothing';
		setTheme(savedTheme);
	}, []);
	const [visibleLevel, setVisibleLevel] = useState(0);
	const [itemLevel, setItemLevel] = useState(0);
	const informationLevels = [
		'introductoryDescriptions',
		'averageDescriptions',
		'advancedDescriptions',
	];
	const [metaToggle, setMetaToggle] = useState(false);

	const handleVisibleLevelClick = (increment: boolean) => {
		if (increment && visibleLevel < 2) {
			setVisibleLevel(visibleLevel + 1);
		} else if (!increment && visibleLevel > 0) {
			setVisibleLevel(visibleLevel - 1);
		}
	};
	const handleInformationLevelClick = (increment: boolean) => {
		if (increment && itemLevel < 2) {
			setItemLevel(itemLevel + 1);
		} else if (!increment && itemLevel > 0) {
			setItemLevel(itemLevel - 1);
		}
	};
	const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

	const generateQRCodeDataURL = async (text: string): Promise<string> => {
		try {
			const dataUrl = await QRCode.toDataURL(text);
			return dataUrl;
		} catch (err) {
			console.error('Failed to generate QR Code', err);
			throw err;
		}
	};

	useEffect(() => {
		fetch(
			`https://info-modelling-project.onrender.com/api/narrative/${narrativeId}/chapter/${chapterIndex}/item/${itemId}`
		)
			.then((res) => {
				console.log(res);
				if (!res.ok) {
					if (res.status === 404) {
						throw new Error('Cuisine not found');
					}
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				return res.json();
			})
			.then((data) => {
				const item: Item = {
					_id: data.itemId,
					name: data.name,
					translation: data.translation,
					introductoryDescriptions: data.introductoryDescriptions,
					averageDescriptions: data.averageDescriptions,
					advancedDescriptions: data.advancedDescriptions,
					imageUrl: data.imageUrl,
					fileName: data.fileName,
					previousChapterPointer: data.previousChapterPointer,
					nextChapterPointer: data.nextChapterPointer,
					previousItemPointer: data.previousItemPointer,
					nextItemPointer: data.nextItemPointer,
					qrCode: data.qrCode, //Heller peke på qrcode lokalt?
					origin: data.origin,
					flavorProfile: data.flavorProfile,
					period: data.period,
				};
				setItem(item);
			});
	}, [itemId]);

	useEffect(() => {
		if (item?.qrCode) {
			generateQRCodeDataURL(item.qrCode)
				.then((dataUrl) => {
					setQrCodeUrl(dataUrl);
				})
				.catch((error) => {
					console.error('Error generating QR code:', error);
				});
		}
	}, [item?.qrCode]);

	if (!item) {
		return <LoadingAnimation />;
	}
	const imageSrc = getImageByFileName(item.fileName);
	if (!imageSrc) {
		return <div>Image not found</div>;
	}

	return (
		<div className={`main-div theme-${theme}`}>
			<div className="item-div">
				<h3 className="item-title">
					{item.name} ({item.translation})
				</h3>
				<div className="item-content-div">
					<div className="item-content-img-div">
						<div className="item-content-img-meta-toggle-div">
							<button onClick={() => setMetaToggle(!metaToggle)}>
								<InfoOutline />
							</button>
						</div>
						{!metaToggle && <img src={imageSrc} alt={item.name} />}

						{metaToggle && (
							<div className="item-content-img-meta-div">
								<h3>Metadata</h3>
								<table className="metadata-table">
									<tbody>
										<tr>
											<th>Origin</th>
											<td>{item.origin}</td>
										</tr>
										<tr>
											<th>Flavor profile</th>
											<td>{item.flavorProfile}</td>
										</tr>
										<tr>
											<th>Period</th>
											<td>{item.period}</td>
										</tr>
									</tbody>
								</table>
								{item.qrCode && (
									<div className="qrcode-div">
										<h4>Read more</h4>
										<img
											src={qrCodeUrl || ''}
											alt={item.imageUrl}
										/>
									</div>
								)}
							</div>
						)}
					</div>

					<div className="item-content-description-div">
						<div className="item-content-description-text-div">
							<p>
								{(item as unknown as Record<string, string[]>)[
									informationLevels[itemLevel]
										.charAt(0)
										.toLowerCase() +
										informationLevels[itemLevel].slice(1)
								]
									?.slice(0, visibleLevel + 1)
									.map((desc, idx) => (
										<> {desc}</>
									))}
							</p>
						</div>

						<div className="item-content-description-buttons-div">
							<div>
								<div>
									<button
										onClick={() =>
											handleVisibleLevelClick(false)
										}
										disabled={visibleLevel == 0}
									>
										Show less
									</button>
								</div>
								<div>
									<button
										onClick={() =>
											handleVisibleLevelClick(true)
										}
										disabled={visibleLevel == 2}
									>
										Show more
									</button>
								</div>
							</div>
							<div>
								<div>
									<button
										onClick={() =>
											handleInformationLevelClick(false)
										}
										disabled={itemLevel == 0}
									>
										Less difficult
									</button>
								</div>
								<div>
									<button
										onClick={() =>
											handleInformationLevelClick(true)
										}
										disabled={itemLevel == 2}
									>
										More difficult
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<ChapterButtons
						previousPointer={item.previousChapterPointer}
						nextPointer={item.nextChapterPointer}
						restartChapter={true}
					/>
					<ItemButtons
						previousPointer={item.previousItemPointer}
						nextPointer={item.nextItemPointer}
					/>
				</div>
			</div>
		</div>
	);
}

export default ItemPage;
