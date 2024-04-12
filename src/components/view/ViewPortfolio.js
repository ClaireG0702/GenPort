import { environment } from "../../environment/environment.developments";
import React, { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { useParams } from "react-router-dom";
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Grid } from "@mui/material";
import { PDFViewer } from "@react-pdf/renderer";
import PreviewToolbar from "./PreviewToolbar";
import PreviewPortfolio from "./PreviewPortfolio";
import PdfDocument from './PdfDocument';


// Page de visualisation d'un portfolio
function ViewPortfolio() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [components, setComponents] = useState([]);
    const [isPdfView, setIsPdfView] = useState(false);

    // Récupération des éléments du portfolio
    useEffect(() => {
        fetch(environment.apiURL + `/controllers/portfolios/get?id=${id}`)
            .then(response => response.json())
            .then(data => {
                const { name: portfolioName } = data;
                setName(portfolioName);
                const { components: componentsData } = data;
                setComponents(componentsData);
            })
            .catch(error => console.error('Error fetching templates:', error));
    }, [id]);

    const deletePortfolio = async () => {
        try {
            const response = await fetch(environment.apiURL + `/controllers/portfolios/remove?id=${id}`, {
                method: 'GET',
            });

            if (response.ok) {
                console.log('Portfolio deleted successfully');
                alert('Le portfolio a bien été supprimé');
                window.location.href = '/portfolios';
            } else {
                console.error('Failed to delete portfolio');
            }
        } catch (error) {
            console.error('Error deleting portfolio:', error);
        }
    }

    const generateSiteContent = () => {
        const portfolio = ReactDOMServer.renderToString(<PreviewPortfolio className="md-10" components={components} />)

        const indexHtml = `
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${name}</title>
            </head>
            <body>
                ${portfolio}
            </body>
            </html>
        `;

        return indexHtml;
    }

    const exportSite = () => {
        const siteContent = generateSiteContent();
        const zip = new JSZip();

        zip.file('index.html', siteContent);
        zip.generateAsync({ type: 'blob' })
            .then(content => {
                saveAs(content, `${name}.zip`);
            })
            .catch(error => {
                console.error('Erreur lors de la génération du site : ', error);
                alert('Une erreur s\'est produite lors de la génération du site')
            });
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <PreviewToolbar id={id} name={name} components={components} deletePortfolio={deletePortfolio} isPdfView={isPdfView} setIsPdfView={setIsPdfView} exportSite={exportSite} />
                </Grid>
            </Grid>
            <Grid container alignItems="stretch" className='custom'>
                <Grid item xs={10} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    {!isPdfView ? (
                        <div>
                            <PreviewPortfolio className="md-10" components={components} />
                        </div>
                    ) : (
                        <PDFViewer className="preview">
                            <PdfDocument components={components} />
                        </PDFViewer>
                    )}
                </Grid>
            </Grid>
        </>
    );
}

export default ViewPortfolio;