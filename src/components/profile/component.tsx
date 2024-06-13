import { FC, useCallback, useState } from "react";
import { Button } from "../button/component";
import { useUser } from "../../hooks/use-user";
import { Modal } from "../modal/component";
import { AuthForm } from "../auth-form/component";

export const Profile: FC = () => {
  const { user, login, logout } = useUser();

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisibleModal(false);
  }, []);

  const handleLogin = useCallback((userName: string) => {
    login(userName);
    handleClose()
  }, [handleClose, login]);

  return (
    <div>
      {user ? (
        <div>
          <p>{user}</p>
          <Button type="button" onClick={logout}>
            Logout
          </Button>
        </div>
      ) : (
        <Button type="button" onClick={() => setIsVisibleModal(true)}>
          Sign in
        </Button>
      )}

      {isVisibleModal && (
        <Modal onClose={handleClose}>
          <AuthForm onLogin={handleLogin} onCancel={handleClose} />
        </Modal>
      )}
    </div>
  );
};
