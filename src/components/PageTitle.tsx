import { Helmet } from "react-helmet-async";

interface IPageTitle {
  name: string;
}

const PageTitle: React.FC<IPageTitle> = ({ name }) => {
  return (
    <Helmet>
      <title>{name}</title>
    </Helmet>
  );
};

export default PageTitle;
