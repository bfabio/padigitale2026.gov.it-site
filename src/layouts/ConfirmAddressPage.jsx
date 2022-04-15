import React from 'react';
import { Container, Row, Col } from 'design-react-kit';
import { FormResult } from '../components/FormResult';
import { SEO } from '../components/SEO';
import content from '../../contents/assistenza/assistenza.yml';
import seo from '../../contents/seo.yml';

export const ConfirmAddressPage = () => {
  const { title: seoTitle, description: seoDescription } = seo.updateSuccessPage;
  const updateSuccess = content.updateSuccess;

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <Container className="px-3">
        <Row>
          <Col xs={12} lg={6} className="offset-lg-3">
            <FormResult resultObject={updateSuccess}></FormResult>
          </Col>
        </Row>
      </Container>
    </>
  );
};
