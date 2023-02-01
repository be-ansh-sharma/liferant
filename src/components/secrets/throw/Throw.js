import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  ScaleFade,
} from '@chakra-ui/react';
import Icon from 'components/icon/Icon';
import RichEditor from 'components/richeditor/RichEditor';
import { useState } from 'react';
import styles from './Throw.module.scss';
import { saveDocument } from 'services/firebase/Database';
import Loading from '../loading/Loading';

const Throw = ({ clickHandler }) => {
  const [fieldInput, setFieldInput] = useState({
    alias: '',
    content: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  const [errorMessage, setErrorMessage] = useState({
    alias: '',
    content: '',
  });

  const updateForm = (input, value) => {
    setFieldInput({
      ...fieldInput,
      [input]: value,
    });
  };

  const validateForm = async () => {
    const { alias, content } = fieldInput;
    if (!alias || alias.length < 3) {
      setErrorMessage({
        ...errorMessage,
        alias: 'Alias too small',
      });
      return false;
    }

    if (!content || content.length < 5) {
      setErrorMessage({
        ...errorMessage,
        content: 'Content is too small',
      });
      return false;
    }

    if (content.length > 20000) {
      setErrorMessage({
        ...errorMessage,
        content: `Max Character Length reached. Please shorten your content. Current: ${content.length}`,
      });
      return false;
    }
    return true;
  };

  const submitForm = async () => {
    if (await validateForm()) {
      saveDocument('secrets', null, {
        ...fieldInput,
        random: Math.floor(Math.random() * 50000),
      }).then(() => {
        setShowLoadingScreen(true);
      });
    }
    setIsLoading(false);
  };

  return (
    <ScaleFade initialScale={0.9} in={true} className={styles.container}>
      {showLoadingScreen ? (
        <Loading cb={clickHandler} mode="throw" />
      ) : (
        <>
          <div className={styles.header}>
            <div className={styles.back} onClick={() => clickHandler(null)}>
              <Icon
                name="FaArrowLeft"
                style={{ color: '#00B0FF', fontSize: '1.5em' }}
              />
            </div>
            <h1 className={styles.heading}>
              Write Your Secret Confession And Throw It Away!
            </h1>
          </div>
          <div className={styles.form}>
            <FormControl mt={4} isInvalid={errorMessage.content}>
              <FormLabel>Your Secret</FormLabel>
              <RichEditor
                maxChar={20000}
                fieldInput={fieldInput}
                fieldInputHandler={setFieldInput}
                fieldName="content"
              />
              <FormErrorMessage>{errorMessage.content}</FormErrorMessage>
            </FormControl>
            <FormControl mt={4} isInvalid={errorMessage.alias}>
              <FormLabel>Alias</FormLabel>
              <Input
                maxLength={150}
                value={fieldInput.alias}
                onChange={e => updateForm('alias', e.target.value)}
              />
              <FormErrorMessage>{errorMessage.alias}</FormErrorMessage>
            </FormControl>
            <div
              className={styles.submit}
              onClick={() => {
                setIsLoading(true);
                submitForm();
              }}>
              <Button isLoading={isLoading} colorScheme="blue" size="md">
                Throw
              </Button>
            </div>
          </div>
        </>
      )}
    </ScaleFade>
  );
};

export default Throw;
