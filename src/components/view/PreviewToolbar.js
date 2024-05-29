import { AppBar, Toolbar } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../custom/Toolbar.scss';
import PdfDocument from "./PdfDocument";

function PreviewToolbar({ id, name, components, deletePortfolio, isPdfView, setIsPdfView, exportSite, importLinkedinData }) {

    return (
        <AppBar>
            <Toolbar className="preview-toolbar">
                <div style={{display: 'flex', flexDirection: 'row', gap: '12px'}}>
                    <h3 className="portfolio-title">{name}</h3>
                    <Button className="btn-toolbar-preview main-btn" onClick={() => setIsPdfView(!isPdfView)}>{!isPdfView ? 'Afficher la vue Pdf' : 'Masquer la vue Pdf'}</Button>
                </div>
                <div className="preview-toolbar-buttons">
                    <div>
                    <Button className="btn-toolbar-preview main-btn" onClick={exportSite}>Générer un site</Button>
                    <Button className="btn-toolbar-preview main-btn">
                        <PDFDownloadLink className="download-btn" document={<PdfDocument components={components} />} fileName={name+'.pdf'}>
                            Télécharger le pdf
                        </PDFDownloadLink>
                    </Button>
                    <Button className="btn-toolbar-preview main-btn" onClick={importLinkedinData}>Importer profil LinkedIn</Button>
                    </div>
                    <div>
                        <Button variant="warning" className="btn-toolbar-preview edit-btn" as={Link} to={'/custom/portfolios/' + id}>Modifier le portfolio</Button>
                        <Button variant="danger" className="btn-toolbar-preview delete-btn" onClick={deletePortfolio}>Supprimer le portfolio</Button>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default PreviewToolbar;