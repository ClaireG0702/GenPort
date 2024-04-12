import { Document, Page, View, Text, Image, StyleSheet, Font, Link } from "@react-pdf/renderer";
import '@fontsource/roboto';

// TODO: gestion des polices
Font.register({
	family: "Roboto",
});

function PdfDocument({ components }) {

	return (
		<Document className="doc">
			<Page size="A4" orientation="landscape">
				{components.map((component, index) => {
					switch (component.value_type) {
						case 1:
							let textStyle = component.values.style ? 'italic' : '';
							let textWeight = component.values.weight ? '600' : '';
							let textDecoration = component.values.decoration ? 'underline' : '';

							const styleText = StyleSheet.create({
								text: {
									position: 'absolute',
									top: `${component.position_y}%`,
									left: `${component.position_x}%`,
									// fontFamily: 'Roboto',
									fontSize: `${component.values.textSize}px`,
									color: component.values.color,
									textAlign: component.values.alignment,
									fontWeight: textWeight,
									fontStyle: textStyle,
									textDecoration: textDecoration
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

							let buttonStyle = component.values.style ? 'italic' : '';
							let buttonWeight = component.values.weight ? '600' : '';
							let buttonDecoration = component.values.decoration ? 'underline' : '';

							const styleButton = StyleSheet.create({
								button: {
									position: 'absolute',
									top: `${component.position_y}px`,
									left: `${component.position_x}px`,
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