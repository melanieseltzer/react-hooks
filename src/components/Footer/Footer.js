import React, { useContext } from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterStyle>
      <a
        className="github-button"
        href="https://github.com/melanieseltzer/react-hooks"
        data-size="large"
        data-show-count="true"
        aria-label="Star ntkme/github-buttons on GitHub"
      >
        Star
      </a>
      <br />
      Made with ❤️ by{' '}
      <a
        href="https://github.com/melanieseltzer"
        rel="noopener noreferrer"
        target="_blank"
      >
        Melanie Seltzer
      </a>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  color: #343434;
  line-height: 3rem;
  margin-top: 3rem;
  text-align: center;
  a {
    color: tomato;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
