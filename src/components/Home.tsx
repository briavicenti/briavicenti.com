import styled from '@emotion/styled';

import src from '../assets/1.png';

const Header: React.FunctionComponent = () => {
  // const src = require('../assets/1.png');
  return (
    <Container>
      <Background />
      <Contents>
        <Title>Hi, I'm Bria.</Title>
        <Subtitle>
          Currently building frontends @{' '}
          <Link href='https://www.bazaarvoice.com/' target='_blank'>
            Bazaarvoice
          </Link>
          .
        </Subtitle>
        <IconContainer>
          <Icon
            className='fab fa-github-square'
            href='https://github.com/briavicenti'
            target='_blank'
          />
          <Icon
            className='fab fa-linkedin'
            href='https://www.linkedin.com/in/briavicenti'
            target='_blank'
          />
          <Icon
            className='fas fa-envelope-square'
            href='mailto:me@briavicenti.com'
            target='_blank'
          />
        </IconContainer>
      </Contents>
    </Container>
  );
};

const Container = styled.div(
  ({ theme }) => `
    height: 100%;
    overflow: hidden;
    position: relative;
    background-color: ${theme.colors.kelp};
  `,
);

const Background = styled.div(
  ({ theme }) => `
    background-image: url(${src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(5px);
    opacity: 0.3;
    width: 100%;
    height: 100%;
    transform: scale(1.5);
  `,
);

const Contents = styled.div(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    color: ${theme.colors.white};
    filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.5));
`,
);

const Title = styled.div(
  ({ theme }) => `
  font-size: ${theme.fontSizes.title};
`,
);

const Subtitle = styled.div(
  ({ theme }) => `
  font-size: ${theme.fontSizes.subtitle};
`,
);

const Link = styled.a(
  ({ theme }) => `
  color: ${theme.colors.white};
  text-decoration: none;
  transition: filter 0.2s ease;
  border-bottom: 1px solid white;

  &:hover {
    filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.9));
  }
`,
);

const IconContainer = styled.div(
  ({ theme }) => `
  margin-top: ${theme.spacings[6]};
  display: flex;
`,
);

const Icon = styled(Link)(
  ({ theme }) => `
  font-size: 96px;
  border-bottom: none !important;

  &:not(:last-of-type) {
    margin-right: ${theme.spacings[3]};
  }
`,
);

export default Header;
