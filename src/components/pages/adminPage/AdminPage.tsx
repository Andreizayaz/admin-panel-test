import { FC, ReactElement } from "react";

import { ContentArea, Header } from "src/components/widgets";

export const AdminPage: FC = (): ReactElement => (
  <>
    <Header />
    <ContentArea />
  </>
);
