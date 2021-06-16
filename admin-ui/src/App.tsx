import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import basicHttpAuthProvider from "./auth-provider/ra-auth-basic-http";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SdfdsfList } from "./sdfdsf/SdfdsfList";
import { SdfdsfCreate } from "./sdfdsf/SdfdsfCreate";
import { SdfdsfEdit } from "./sdfdsf/SdfdsfEdit";
import { SdfdsfShow } from "./sdfdsf/SdfdsfShow";
import { SupportList } from "./support/SupportList";
import { SupportCreate } from "./support/SupportCreate";
import { SupportEdit } from "./support/SupportEdit";
import { SupportShow } from "./support/SupportShow";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app-75"}
        dataProvider={dataProvider}
        authProvider={basicHttpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Sdfdsf"
          list={SdfdsfList}
          edit={SdfdsfEdit}
          create={SdfdsfCreate}
          show={SdfdsfShow}
        />
        <Resource
          name="Support"
          list={SupportList}
          edit={SupportEdit}
          create={SupportCreate}
          show={SupportShow}
        />
      </Admin>
    </div>
  );
};

export default App;
