import { useHistory } from "react-router";
import { Box, BoxImage, Container, NameCompany } from "../styles/listClients";

export function ListClients() {

    const history = useHistory();

    function handleClik(){
        history.push('/page/currentCompany');
    }
  return (
    <Container>
      <Box onClick={handleClik}>
        <BoxImage src="https://www.redflag.com.br/images/logo-wide@2x.png"></BoxImage>
      </Box>
      <Box onClick={handleClik}>
        <BoxImage src="https://dms.licdn.com/video-thumbs/C4D05AQHulRXEtaBM9Q/79acac6d6a6a48afb9e8293fc4e137fe/feedshare-videocover_low-captions-thumbnails/480x270-00001.jpg"></BoxImage>
      </Box>
      <Box onClick={handleClik}>
        <BoxImage src="https://www.redflag.com.br/images/logo-wide@2x.png"></BoxImage>
      </Box>
      <Box onClick={handleClik}>
        <BoxImage src="https://www.redflag.com.br/images/logo-wide@2x.png"></BoxImage>
      </Box>
      <Box>
        <BoxImage src="https://www.redflag.com.br/images/logo-wide@2x.png"></BoxImage>
      </Box>
      <Box>
        <BoxImage src="https://www.redflag.com.br/images/logo-wide@2x.png"></BoxImage>
      </Box>
    </Container>
  );
}
