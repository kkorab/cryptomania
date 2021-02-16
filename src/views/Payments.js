import React from 'react';
import { PageHeadline, PageWrapper } from 'components/atoms';
import { LatestActivity, PaymentsFilters } from 'components/molecules';

const Payments = () => (
  <PageWrapper>
    <PageHeadline>Payments</PageHeadline>
    <PaymentsFilters />
    <LatestActivity payments />
  </PageWrapper>
);

export default Payments;
