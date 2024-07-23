import React, { ChangeEvent, FormEvent, useState } from "react";
import { InputComponent, MainDiv, RegisterForm } from "./styles";
import "./stylesCss.css";
import Logo from "../../assets/images/additionImage/Logo.png";
import { useDispatch } from "react-redux";
import { changeAccount } from "../../redux/slices/accountSlice";
import { AccountType } from "../../types";
import { useNavigate } from "react-router-dom";

interface Props {
  isPage: boolean;
}

const RegistrationPage: React.FC<Props> = ({ isPage }) => {
  const dispath = useDispatch();
  const navigate = useNavigate();

  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [gmailInput, setGmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [styleName, setStyleName] = useState("");
  const [styleSurname, setStyleSurname] = useState("");
  const [styleGmail, setStyleGmail] = useState("");
  const [stylePassword, setStylePassword] = useState("");

  const [errorMessageName, setErrorMessageName] = useState("");
  const [errorMessageSurname, setErrorMessageSurname] = useState("");
  const [errorMessageGmail, setErrorMessageGmail] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };
  const onChangeSurname = (e: ChangeEvent<HTMLInputElement>) => {
    setSurnameInput(e.target.value);
  };
  const onChangeGmail = (e: ChangeEvent<HTMLInputElement>) => {
    setGmailInput(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let checkAddAccount = true;

    if (nameInput == "") {
      setErrorMessageName("cannot be empty");
      setStyleName("redStyle");
      checkAddAccount = false;
    } else {
      setErrorMessageName("");
      setStyleName("greenStyle");
    }
    if (surnameInput == "") {
      setErrorMessageSurname("cannot be empty");
      setStyleSurname("redStyle");
      checkAddAccount = false;
    } else {
      setErrorMessageSurname("");
      setStyleSurname("greenStyle");
    }

    if (gmailInput == "") {
      setErrorMessageGmail("cannot be empty");

      setStyleGmail("redStyle");
      checkAddAccount = false;
    } else if (!gmailInput.endsWith("@gmail.com")) {
      setErrorMessageGmail("should end with gmail.com");
      setStyleGmail("redStyle");
      checkAddAccount = false;
    } else if (gmailInput.length < 11) {
      setErrorMessageGmail("must be at least 11 characters long");
      setStyleGmail("redStyle");
      checkAddAccount = false;
    } else {
      setErrorMessageGmail("");
      setStyleGmail("greenStyle");
    }

    if (passwordInput == "") {
      setErrorMessagePassword("cannot be empty");

      setStylePassword("redStyle");
      checkAddAccount = false;
    } else if (passwordInput.length < 8) {
      setErrorMessagePassword("must be at least 8 characters long");
      setStylePassword("redStyle");
      checkAddAccount = false;
    } else {
      setErrorMessagePassword("");
      setStylePassword("greenStyle");
    }

    if (checkAddAccount) {
      const newAccount: AccountType = {
        name: nameInput,
        surname: surnameInput,
        gmail: gmailInput,
        password: passwordInput,
      };

      dispath(changeAccount(newAccount));
      if (isPage) {
        navigate("/breakfast", { replace: true });
      } else {
        navigate("/profil", {
          replace: true,
          state: { editData: false },
        });
      }
    }
  };

  return (
    <MainDiv>
      {isPage ? <img src={Logo} alt="Logo" /> : <></>}

      <RegisterForm onSubmit={onSubmitForm}>
        <div>
          <label>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
          <p>{errorMessageName}</p>
        </div>
        <InputComponent
          type="text"
          placeholder="Enter Name"
          value={nameInput}
          onChange={onChangeName}
          className={styleName}
        />
        {/* / */}
        <div>
          <label>Surname&nbsp;</label>
          <p>{errorMessageSurname}</p>
        </div>
        <InputComponent
          type="text"
          placeholder="Enter Surname"
          value={surnameInput}
          onChange={onChangeSurname}
          className={styleSurname}
        />
        {/* / */}
        <div>
          <label>Gmail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <p>{errorMessageGmail}</p>
        </div>
        <InputComponent
          type="text"
          placeholder="Enter Gmail"
          value={gmailInput}
          onChange={onChangeGmail}
          className={styleGmail}
        />
        {/* / */}
        <div>
          <label>Password</label>
          <p>{errorMessagePassword}</p>
        </div>{" "}
        <InputComponent
          type="text"
          placeholder="Enter Password"
          value={passwordInput}
          onChange={onChangePassword}
          className={stylePassword}
        />
        {/* / */}
        <button type="submit">{isPage ? "Log In" : "Edit"}</button>
      </RegisterForm>
    </MainDiv>
  );
};

export default RegistrationPage;
