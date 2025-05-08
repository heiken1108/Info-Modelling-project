import { useParams } from 'react-router-dom';
import { Item } from '../lib/types';
import { useEffect, useState } from 'react';
import '../styling/ItemPageNew.css';

import ChapterButtons from '../components/NavigationButtons/ChapterButtons';
import ItemButtons from '../components/NavigationButtons/ItemButtons';
import getImageByFileName from '../utils/imageLoader';
import { InfoOutline, QrCode } from '@mui/icons-material';
import QRCode from 'qrcode';

function ItemPage() {
	const { narrativeId, chapterIndex, itemId } = useParams<{
		narrativeId: string;
		chapterIndex: string;
		itemId: string;
	}>();
	const [item, setItem] = useState<Item>();
	const [theme, setTheme] = useState<string>('viking');
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') || 'viking';
		setTheme(savedTheme);
	}, []);
	const [visibleLevel, setVisibleLevel] = useState(1);
	const [itemLevel, setItemLevel] = useState(0);
	const informationLevels = [
		'introductoryDescriptions',
		'averageDescriptions',
		'advancedDescriptions',
	];
	const [metaToggle, setMetaToggle] = useState(false);

	const handleVisibleLevelClick = () => {
		setVisibleLevel((prev) => (prev < 3 ? prev + 1 : 1));
	};
	const handleInformationLevelClick = () => {
		setItemLevel((prev) => (prev < 2 ? prev + 1 : 0));
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
			`/api/narrative/${narrativeId}/chapter/${chapterIndex}/item/${itemId}`
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
					qrCode: data.imageUrl, //Heller peke på qrcode lokalt?
					origin: data.origin,
					flavorProfile: data.flavorProfile,
					period: data.period,
				};
				setItem(item);
			})
			.then(() => {
				if (item?.qrCode) {
					generateQRCodeDataURL(item.qrCode)
						.then((dataUrl) => {
							setQrCodeUrl(dataUrl);
						})
						.catch((error) => {
							console.error('Error generating QR code:', error);
						});
				}
			});
	});

	if (!item) {
		return <div>Loading item...</div>;
	}
	const imageSrc = getImageByFileName(item.fileName);
	if (!imageSrc) {
		return <div>Image not found</div>;
	}
	/*
	return (
		<div>
			<div>
				<p>{theme}</p>
				<div className="nav-buttons">
					<ChapterButtons
						previousPointer={item.previousChapterPointer}
						nextPointer={item.nextChapterPointer}
						restartChapter={true}
					/>
				</div>
				<h1 style={{ textAlign: 'center' }}>
					{item.name} ({item.translation})
				</h1>
				<div className="item-container">
					<img src={imageSrc} alt={item.name} />
					<div className="information-container">
						{(item as unknown as Record<string, string[]>)[
							informationLevels[itemLevel]
								.charAt(0)
								.toLowerCase() +
								informationLevels[itemLevel].slice(1)
						]
							?.slice(0, visibleLevel)
							.map((desc, idx) => (
								<p key={idx}>{desc}</p>
							))}
					</div>
					<div className="button-container">
						<button onClick={handleVisibleLevelClick}>
							{visibleLevel === 1
								? 'Show more'
								: visibleLevel === 2
								? 'Show all'
								: 'Show less'}
						</button>
						<button
							onClick={handleInformationLevelClick}
							style={{ marginTop: '10px' }}
						>
							{itemLevel === 0
								? 'I am smarter'
								: itemLevel === 1
								? 'even smarter'
								: 'dummy time'}
						</button>
					</div>
				</div>
				<div className="nav-buttons">
					<ItemButtons
						previousPointer={item.previousItemPointer}
						nextPointer={item.nextItemPointer}
					/>
				</div>
			</div>
		</div>
	);*/

	return (
		<div className={`main-div theme-${theme}`}>
			<div className="item-div">
				<h3 className="item-title">{item.name}</h3>
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
								<table>
									<tbody>
										<tr>
											<th>File name</th>
											<td>{item.fileName}</td>
										</tr>
										<tr>
											<th>Image source</th>
											<td>{item.imageUrl}</td>
										</tr>
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
									?.slice(0, visibleLevel)
									.map((desc, idx) => (
										<> {desc}</>
									))}
							</p>
						</div>
						<div className="item-content-description-buttons-div">
							<button onClick={handleVisibleLevelClick}>
								{visibleLevel === 1
									? 'Show more'
									: visibleLevel === 2
									? 'Show all'
									: 'Show less'}
							</button>
							<button onClick={handleInformationLevelClick}>
								{itemLevel === 0
									? 'I am smarter'
									: itemLevel === 1
									? 'even smarter'
									: 'dummy time'}
							</button>
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
