import { Document, Page, View, Text, Image, StyleSheet, Font } from "@react-pdf/renderer";
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

							const styles = StyleSheet.create({
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

							return <View key={index} style={styles.text}><Text>{component.values.texte}</Text></View>
						case 2:
							return <View key={index}><Image src={component.values.link} /></View>
						default:
							return null;
					}
				})}
			</Page>
		</Document>
	);
}

export default PdfDocument;