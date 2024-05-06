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
function LinkedInRedirectPage() {
		const params = new URLSearchParams(window.location.search);


		const insertLinkedInData = async (id, code ) => {
			console.log('Insertion des données LinkedIn...' + code);
			const redirect_uri = window.location.origin + window.location.pathname+'?portfolio_id='+id;
			await fetch(environment.apiURL + '/controllers/portfolios/insert_linkedin_profile', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ portfolio_id: id, code: code, redirect_uri: redirect_uri}),
			})
			.then(response => {

				if (!response.ok) {
					throw new Error('Failed to fetch');
				}
			})
			.then(data => {
				alert('Les données LinkedIn ont bien été insérées. Vous allez être redirigé vers votre portfolio.');
				window.location.href = '/view/' + id;
			})
			.catch(error => {
				console.error('Error inserting LinkedIn data:', error.message);
				alert('Une erreur s\'est produite lors de l\'insertion des données LinkedIn. Vous allez être redirigé vers votre portfolio.');
				window.location.href = '/view/' + id;
			});
		}

		const initial = async () => {
			if (!params.has('portfolio_id')) {
				console.error('Erreur de redirection après LinkedIn : pas d\'id de portfolio dans l\'url');
				alert('Impossible d\'atteindre le portfolio. Vous allez être redirigé vers la liste des portfolios.');
				window.location.href = '/portfolios';
			}
			
			const id = params.get('portfolio_id');

			if (!params.has('code')) {
				console.error('Erreur de redirection après LinkedIn : pas de code dans l\'url');
				alert('Une erreur s\'est produite lors de la connexion à LinkedIn. Vous allez être redirigé vers votre portfolio.');
				window.location.href = '/view/' + id;
			}

			const code = params.get('code');
			insertLinkedInData(id, code);
		};

		initial();

    return (
        <div>
						<h1>Redirection depuis LinkedIn</h1>
						<p>Vous allez être redirigé vers le portfolio...</p>
				</div>
    );
}

export default LinkedInRedirectPage;