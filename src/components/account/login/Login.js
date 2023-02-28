import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { Auth } from 'src/services/firebase/Firebase';
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from 'react-firebase-hooks/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userErrorMsg, setUserErrorMsg] = useState(false);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const toast = useToast();
  const [sendPasswordResetEmail, sending, errorSending] =
    useSendPasswordResetEmail(Auth);

  const handleUsernameChange = e => setUsername(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(Auth);

  const signinHandler = () => {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!username && !regex.test(username)) {
      setUserErrorMsg('Invalid Email');
    } else {
      setUserErrorMsg('');
    }
    if (password.length < 8) {
      return setPasswordErrorMsg('Password is very weak');
    }
    setPasswordErrorMsg('');
    setIsloading(true);
    signInWithEmailAndPassword(username, password);
  };

  if (error && isLoading) {
    setIsloading(false);
  }

  if (user) {
    window.location.reload();
  }

  return (
    <>
      <Button onClick={onOpen} mr={2}>
        Log In
      </Button>
      <Modal motionPreset="slideInBottom" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <Stack spacing={4}>
                <FormControl isRequired isInvalid={userErrorMsg}>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                  {!!userErrorMsg && (
                    <FormErrorMessage>{userErrorMsg}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isRequired isInvalid={passwordErrorMsg}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    min={8}
                    onChange={handlePasswordChange}
                  />
                  {!!passwordErrorMsg && (
                    <FormErrorMessage>{passwordErrorMsg}</FormErrorMessage>
                  )}
                </FormControl>
                {error && <div>{error.message}</div>}
              </Stack>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={isLoading}
              colorScheme="blue"
              mr={3}
              onClick={signinHandler}>
              Log Me In!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
