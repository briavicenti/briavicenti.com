import styled from '@emotion/styled';

import logo from '../assets/bvround.svg';

const Header: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <Title>Bria Vicenti</Title>
    </Wrapper>
  );
};

const Logo = styled.img(
  ({ theme }) => `
    width: ${theme.spacings[6]};
    height: ${theme.spacings[6]};
    margin-right: ${theme.spacings[3]};
`,
);

const Wrapper = styled.div(
  ({ theme }) => `
      display: flex;
      align-items: center;
      padding: ${theme.spacings[3]} ${theme.spacings[4]};
      background-color: ${theme.colors.white};
  `,
);

const Title = styled.div(
  ({ theme }) => `
    color: ${theme.colors.kelp};
    font-weight: 300;
    font-family: 'Roboto';
    font-size: ${theme.spacings[6]};
`,
);

export default Header;
