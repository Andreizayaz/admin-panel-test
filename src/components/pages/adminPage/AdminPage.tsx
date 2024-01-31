import { FC, ReactElement } from "react";

import { ContentArea, Header } from "components/widgets";

export const AdminPage: FC = (): ReactElement => (
  <>
    <Header />
    <ContentArea />
  </>
);
