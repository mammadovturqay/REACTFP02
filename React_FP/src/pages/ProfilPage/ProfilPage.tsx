import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAccount } from "../../redux/selectors";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import { useLocation } from "react-router-dom";
import { DesignDiv } from "./styles";

const ProfilPage = () => {
  const location = useLocation();
  const account = useSelector(getAccount);

  const [editOpened, setEditOpened] = useState(false);

  useEffect(() => {
    setEditOpened(location.state?.editData || false);
  }, [location.state]);

  const editProfilEvent = () => {
    setEditOpened(true);
  };

  return (
    <div>
      {editOpened ? (
        <RegistrationPage isPage={false} />
      ) : (
        <DesignDiv>
          <div>
            <div>
              <p>Name: </p>
              <p>{account.name}</p>
            </div>
            <div>
              <p>Surname: </p>
              <p>{account.surname}</p>
            </div>
            <div>
              <p>Gmail: </p>
              <p>{account.gmail}</p>
            </div>
            <div>
              <p>Password: </p>
              <p>{account.password}</p>
            </div>
            <button onClick={editProfilEvent}>Edit</button>
          </div>
        </DesignDiv>
      )}
    </div>
  );
};

export default ProfilPage;
