import { Grid } from "@mui/material";
import DefaultToolbar from "../custom/toolbars/DefaultToolbar";
import PreviewPortfolio from "./PreviewPortfolio";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { environment } from "../../environment/environment.developments";


// Page de visualisation d'un portfolio
function ViewPortfolio() {
	const { id } = useParams();
    const [components, setComponents] = useState([]);

	useEffect(() => {
        fetch(environment.apiURL+`/controllers/portfolios/get?id=${id}`)
            .then(response => response.json())
            .then(data => {
                const {components: componentsData} = data;
                setComponents(componentsData);
            })
            .catch(error => console.error('Error fetching templates:', error));
    }, [id]);

	return (
		<>
            <Grid container>
                <Grid item xs={12}>
                    <DefaultToolbar />
                </Grid>
            </Grid>
            <Grid container alignItems="stretch" className='custom'>
                <Grid item xs={10} style={{marginLeft:'auto', marginRight:'auto'}}>
                    <PreviewPortfolio className="md-10" components={components} />
                </Grid>
            </Grid>
        </>
	);
}

export default ViewPortfolio;