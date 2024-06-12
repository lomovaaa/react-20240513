import { FC, useState } from "react";
import { Button } from "../button/component";

type AuthFormProps = {
  onLogin: (userName: string) => void;
  onCancel: () => void;
};

export const AuthForm: FC<AuthFormProps> = ({ onLogin, onCancel }) => {
  const [userName, setUserName] = useState("");

  return (
    <div>
      <label>
        Имя:
        <input
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </label>
      <Button
        type="button"
        disabled={!userName}
        onClick={() => onLogin(userName)}
      >
        Войти
      </Button>
      <Button type="button" onClick={onCancel}>
        Отмена
      </Button>
    </div>
  );
};
