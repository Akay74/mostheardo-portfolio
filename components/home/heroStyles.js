import styled from 'styled-components';

const HeroContainer = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  padding: 20px;
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 40px;
  }
`;

const AlbumInfo = styled.div`
  margin-bottom: 40px;
`;

const AlbumTitle = styled.h2`
  font-size: 24px;
  color: #a0522d;
`;

const ReleaseInfo = styled.p`
  font-size: 18px;
  color: #a0522d;
`;

const HeroImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center top;
  @media (min-width: 768px) {
    width: 100%;
    height: auto;
    object-position: center;
  }
`;