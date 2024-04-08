import { environment } from "../../environment/environment.developments";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { PDFViewer } from "@react-pdf/renderer";
import PreviewToolbar from "./PreviewToolbar";
import PreviewPortfolio from "./PreviewPortfolio";


// Page de visualisation d'un portfolio
function ViewPortfolio() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [components, setComponents] = useState([]);

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

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <PreviewToolbar id={id} name={name} components={components} deletePortfolio={deletePortfolio} />
                </Grid>
            </Grid>
            <Grid container alignItems="stretch" className='custom'>
                <Grid item xs={10} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <PDFViewer className="preview">
                        <PreviewPortfolio className="md-10" components={components} />
                    </PDFViewer>
                </Grid>
            </Grid>
        </>
    );
}

export default ViewPortfolio;