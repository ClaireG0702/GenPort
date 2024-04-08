import { Toolbar, AppBar } from "@mui/material";
import { Button } from "react-bootstrap";
import '../custom/Toolbar.scss';
import { Link } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PreviewPortfolio from "./PreviewPortfolio";

function PreviewToolbar({ id, name, components, deletePortfolio }) {

    return (
        <AppBar>
            <Toolbar className="preview-toolbar">
                <div>
                    <h3 className="portfolio-title">{name}</h3>
                </div>
                <div className="preview-toolbar-buttons">
                    <Button>
                        <PDFDownloadLink document={<PreviewPortfolio components={components} />} fileName={name+'.pdf'}>
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