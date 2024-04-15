import { Document, Page, View, Text, Image, StyleSheet, Font, Link } from "@react-pdf/renderer";
import RobotoRegular from '../../assets/fonts/Roboto/Roboto-Regular.ttf';
import RobotoItalic from '../../assets/fonts/Roboto/Roboto-Italic.ttf';
import RobotoBold from '../../assets/fonts/Roboto/Roboto-Bold.ttf';
import RobotoBoldItalic from '../../assets/fonts/Roboto/Roboto-BoldItalic.ttf';
import OpenSansRegular from '../../assets/fonts/OpenSans/OpenSans-Regular.ttf';
import OpenSansItalic from '../../assets/fonts/OpenSans/OpenSans-Italic.ttf';
import OpenSansBold from '../../assets/fonts/OpenSans/OpenSans-Bold.ttf';
import OpenSansBoldItalic from '../../assets/fonts/OpenSans/OpenSans-BoldItalic.ttf';
import OswaldRegular from '../../assets/fonts/Oswald/Oswald-Regular.ttf';
import OswaldBold from '../../assets/fonts/Oswald/Oswald-Bold.ttf';
import SedanRegular from '../../assets/fonts/Sedan/Sedan-Regular.ttf';
import SedanItalic from '../../assets/fonts/Sedan/Sedan-Italic.ttf';

Font.register({
    family: 'Roboto',
    fonts: [
        { src: RobotoRegular, fontWeight: 400 },
        { src: RobotoItalic, fontWeight: 400, fontStyle: 'italic' },
        { src: RobotoBold, fontWeight: 700 },
        { src: RobotoBoldItalic, fontWeight: 700, fontStyle: 'italic' }
    ]
});

Font.register({
    family: 'Open Sans',
    fonts: [
        { src: OpenSansRegular, fontWeight: 400 },
        { src: OpenSansItalic, fontWeight: 400, fontStyle: 'italic' },
        { src: OpenSansBold, fontWeight: 700 },
        { src: OpenSansBoldItalic, fontWeight: 700, fontStyle: 'italic' }
    ]
});

Font.register({
    family: 'Oswald',
    fonts: [
        { src: OswaldRegular, fontWeight: 400 },
        { src: OswaldBold, fontWeight: 700 }
    ]
});

Font.register({
    family: 'Sedan',
    fonts: [
        { src: SedanRegular, fontWeight: 400 },
        { src: SedanItalic, fontWeight: 400, fontStyle: 'italic' }
    ]
});



function PdfDocument({ components }) {

	return (
		<Document className="doc">
			<Page size="A4" orientation="landscape">
				{components.map((component, index) => {
					switch (component.value_type) {
						case 1:
							let textStyle = component.values.style ? 'italic' : 'normal';
							let textWeight = component.values.weight ? 700 : 400;
							let textDecoration = component.values.decoration ? 'underline' : '';

							console.log(component.values.police)
							const styleText = StyleSheet.create({
								text: {
									position: 'absolute',
									top: `${component.position_y}%`,
									left: `${component.position_x}%`,
									fontFamily: component.values.police,
									color: component.values.color,
									textAlign: component.values.alignment,
									fontSize: `${component.values.textSize}px`,
									fontWeight: textWeight,
									fontStyle: textStyle,
									textDecoration: textDecoration,
								}
							})

							return <View key={index} style={styleText.text}><Text>{component.values.texte}</Text></View>
						case 2:
							const styleImage = StyleSheet.create({
								img: {
									position: 'absolute',
									top: `${component.position_y}%`,
									left: `${component.position_x}%`,
									height: `${component.height}%`,
									border: `${component.values.border}px solid ${component.values.borderColor}`,
									borderRadius: `${component.values.borderRadius}px`
								}
							})

							return <View key={index} style={styleImage.img}><Image src={component.values.link} /></View>
						case 3:

							let buttonStyle = component.values.style ? 'italic' : 'normal';
							let buttonWeight = component.values.weight ? 700 : 400;
							let buttonDecoration = component.values.decoration ? 'underline' : '';

							const styleButton = StyleSheet.create({
								button: {
									position: 'absolute',
									top: `${component.position_y}%`,
									left: `${component.position_x}%`,
									color: component.values.color,
									fontFamily: component.values.police,
									textSize: `${component.values.textSize}px`,
									fontStyle: buttonStyle,
									fontWeight: buttonWeight,
									textDecoration: buttonDecoration,
									border: `${component.values.border}px solid ${component.values.borderColor}`,
									borderRadius: `${component.values.borderRadius}px`,
									backgroundColor: component.values.backgroundColor
								}
							})

							return <View key={index} style={styleButton.button}><Link src={component.values.link}><Text>{component.values.texte}</Text></Link></View>
						case 5:
							const styleShape = StyleSheet.create({
								shape: {
									position: 'absolute',
									top: `${component.position_y}%`,
									left: `${component.position_x}%`,
									zIndex: component.zIndex,
									width: `${component.width}%`,
									height: `${component.height}%`,
									backgroundColor: component.values.color,
									border: `${component.values.border}px solid ${component.values.borderColor}`,
									borderRadius: `${component.values.borderRadius}px`
								}
							})

							return <View key={index} style={styleShape.shape}></View>
						default:
							return null;
					}
				})}
			</Page>
		</Document>
	);
}

export default PdfDocument;