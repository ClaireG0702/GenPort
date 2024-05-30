import { useNavigate } from "react-router-dom";

export const useCustomNavigate = () => {
	const navigate = useNavigate();

	const navigateToTemplates = () => {
		navigate("/templates");
	}

	const navigateToPortfolios = () => {
		navigate("/portfolios");
	}

	return {
		navigateToTemplates,
		navigateToPortfolios
	}
}