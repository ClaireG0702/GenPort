import { Toolbar, AppBar } from "@mui/material";
import { Button } from "react-bootstrap";
import '../custom/Toolbar.scss';
import { Link } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from "./PdfDocument";

function PreviewToolbar({ id, name, components, deletePortfolio, isPdfView, setIsPdfView }) {

    return (
        <AppBar>
            <Toolbar className="preview-toolbar">
                <div style={{display: 'flex', flexDirection: 'row', gap: '12px'}}>
                    <h3 className="portfolio-title">{name}</h3>
                    <Button onClick={() => setIsPdfView(!isPdfView)}>{!isPdfView ? 'Afficher la vue Pdf' : 'Masquer la vue Pdf'}</Button>
                </div>
                <div className="preview-toolbar-buttons">
                    <Button>
                        <PDFDownloadLink document={<PdfDocument components={components} />} fileName={name+'.pdf'}>
                            Télécharger
                        </PDFDownloadLink>
                    </Button>
                    <Button variant="warning" as={Link} to={'/custom/portfolios/' + id}>Modifer le portfolio</Button>
                    <Button variant="danger" onClick={deletePortfolio}>Supprimer le portfolio</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default PreviewToolbar;