import styles from './Input.module.scss';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { useState } from 'react';
import dayjs from 'src/utils/dayconfig';

const WasteInput = ({ resultHandler, date }) => {
  const [fieldInput, setFieldInput] = useState({
    day: date || '',
  });

  const [errorMessage, setErrorMessage] = useState({
    day: '',
  });

  const updateForm = (input, value) => {
    console.log(value);
    setFieldInput({
      ...fieldInput,
      [input]: value,
    });
  };

  const validateForm = () => {
    let { day } = fieldInput;
    if (!day) {
      setErrorMessage({
        ...errorMessage,
        day: 'Invalid Date',
      });
      return false;
    }
    return true;
  };

  const submitForm = () => {
    if (validateForm()) {
      resultHandler(fieldInput.day);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div>When Was Your Birthday?</div>
        <FormControl mt={8} isInvalid={errorMessage.day}>
          <Input
            placeholder="Select Date and Time"
            size="md"
            value={fieldInput.day}
            type="datetime-local"
            max={dayjs().format('YYYY-MM-DDThh:mm')}
            onChange={e => updateForm('day', e.target.value)}
          />
          <FormErrorMessage>{errorMessage.day}</FormErrorMessage>
        </FormControl>
        <AwesomeButton
          cssModule={AwesomeButtonStyles}
          className={styles.button}
          type="primary"
          ripple
          size="medium"
          onPress={submitForm}>
          Show Me!
        </AwesomeButton>
      </div>
    </div>
  );
};

export default WasteInput;
