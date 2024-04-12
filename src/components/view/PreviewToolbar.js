import { Toolbar, AppBar } from "@mui/material";
import { Button } from "react-bootstrap";
import '../custom/Toolbar.scss';
import { Link } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from "./PdfDocument";

function PreviewToolbar({ id, name, components, deletePortfolio, isPdfView, setIsPdfView, exportSite }) {

    return (
        <AppBar>
            <Toolbar className="preview-toolbar">
                <div style={{display: 'flex', flexDirection: 'row', gap: '12px'}}>
                    <h3 className="portfolio-title">{name}</h3>
                    <Button onClick={() => setIsPdfView(!isPdfView)}>{!isPdfView ? 'Afficher la vue Pdf' : 'Masquer la vue Pdf'}</Button>
                </div>
                <div className="preview-toolbar-buttons">
                    <div>
                    <Button onClick={exportSite}>Générer un site</Button>
                    <Button>
                        <PDFDownloadLink className="download-btn" document={<PdfDocument components={components} />} fileName={name+'.pdf'}>
                            Télécharger le pdf
                        </PDFDownloadLink>
                    </Button>
                    </div>
                    <div>
                        <Button variant="warning" as={Link} to={'/custom/portfolios/' + id}>Modifer le portfolio</Button>
                        <Button variant="danger" onClick={deletePortfolio}>Supprimer le portfolio</Button>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default PreviewToolbar;