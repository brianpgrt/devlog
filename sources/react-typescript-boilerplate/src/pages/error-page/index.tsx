import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button, FlexContainer, Typography } from "components/elements";
import { PATH_DASHBOARD } from "config/router";

const ErrorPage = ({ isGlobal = false }) => {
	return (
		<Container style={{ position: isGlobal ? "fixed" : "absolute" }}>
			<div>
				<FlexContainer alignItems="center" justifyContent="center">
					<Typography variant="error_title">500</Typography>
				</FlexContainer>
				<Typography variant="error_des" align="center" top={12} bottom={12}>
					Internal server error
				</Typography>
				<FlexContainer alignItems="center" justifyContent="center">
					<Typography align="center" bottom={20} style={{ maxWidth: 380 }}>
						Uh oh, it looks like we have encountered some turbulence! Please excuse us while we work to find
						some smoother air.
					</Typography>
				</FlexContainer>
				<FlexContainer alignItems="center" justifyContent="center">
					<Link to={PATH_DASHBOARD}>
						<Button type="default">BACK TO HOMEPAGE</Button>
					</Link>
				</FlexContainer>
			</div>
		</Container>
	);
};

export default ErrorPage;

const Container = styled.div`
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;
