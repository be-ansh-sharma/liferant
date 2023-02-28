import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  ScaleFade,
} from '@chakra-ui/react';
import { useState } from 'react';
import styles from './NewBlog.module.scss';
import RichEditor from 'components/richeditor/RichEditor';
import { createBlog } from 'services/firebase/Database';
import { uploadImage } from 'services/firebase/Storage';
import { useRouter } from 'next/router';
import { toSeoUrl } from 'utils/Utils';
import dayjs from 'utils/dayconfig';

const NewBlog = ({ blog }) => {
  const [fieldInput, setFieldInput] = useState({
    title: blog?.title || '',
    description: blog?.description || '',
    metaDescription: blog?.metaDescription || '',
    image: blog?.image || '',
    byline: blog?.byline || '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    title: '',
    content: '',
    metaDescription: '',
    image: '',
    byline: '',
  });
  const router = useRouter();

  const updateForm = (input, value) => {
    setFieldInput({
      ...fieldInput,
      [input]: value,
    });
  };

  const validateForm = async () => {
    const { title, content, metaDescription, image, byline } = fieldInput;

    if (!title || title.length < 8) {
      setErrorMessage({
        ...errorMessage,
        title: 'Title too small',
      });
      return false;
    }

    if (!byline || byline.length < 4) {
      setErrorMessage({
        ...errorMessage,
        byline: 'byline too small',
      });
      return false;
    }

    if (!metaDescription || metaDescription.length < 5) {
      setErrorMessage({
        ...errorMessage,
        metaDescription: 'metaDescription too small',
      });
      return false;
    }

    if (!content || content.length < 10) {
      setErrorMessage({
        ...errorMessage,
        content: 'Description too small',
      });
      return false;
    }

    console.log('4');
    console.log(`image is ${!image}`);
    if (!image) {
      setErrorMessage({
        ...errorMessage,
        image: `No Image selected`,
      });
      return false;
    }

    if (content.length > 20000) {
      setErrorMessage({
        ...errorMessage,
        content: `Max Character Length reached. Please shorten your description. Current: ${description.length}`,
      });
      return false;
    }

    return true;
  };

  const submitForm = async () => {
    if (await validateForm()) {
      let fullPath = await uploadImage(fieldInput.image);
      if (!fullPath) {
        setErrorMessage({
          ...errorMessage,
          imagePath: `Not able to upload the file`,
        });
        return;
      }
      await createBlog(
        {
          author: 'lifeRant',
          created: dayjs().utc().toString(),
          content: fieldInput.content,
          seoTitle: toSeoUrl(fieldInput.title),
          title: fieldInput.title,
          metaDescription: fieldInput.metaDescription,
          imagePath: fullPath,
          byline: fieldInput.byline,
        },
        !!blog,
        blog?.refId,
      );
      router.push(`/blogs/${toSeoUrl(fieldInput.title)}`);
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      <ScaleFade initialScale={0.9} in={true} className={styles.formWrapper}>
        <Heading as="h1" color="blue.500" textAlign="center">
          Create a blog
        </Heading>
        <div className={styles.form}>
          <FormControl isInvalid={errorMessage.title}>
            <FormLabel>Title</FormLabel>
            <Input
              maxLength={150}
              value={fieldInput.title}
              onChange={e => updateForm('title', e.target.value)}
            />
            <FormErrorMessage>{errorMessage.title}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errorMessage.byline}>
            <FormLabel>By line</FormLabel>
            <Input
              maxLength={200}
              value={fieldInput.byline}
              onChange={e => updateForm('byline', e.target.value)}
            />
            <FormErrorMessage>{errorMessage.title}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errorMessage.title}>
            <FormLabel>Meta Description</FormLabel>
            <Input
              maxLength={300}
              value={fieldInput.metaDescription}
              onChange={e => updateForm('metaDescription', e.target.value)}
            />
            <FormErrorMessage>{errorMessage.title}</FormErrorMessage>
          </FormControl>
          <FormControl mt={4} isInvalid={errorMessage.description}>
            <FormLabel>Description</FormLabel>
            <RichEditor
              maxChar={20000}
              fieldInput={fieldInput}
              fieldInputHandler={setFieldInput}
              fieldName="content"
            />
            <FormErrorMessage>{errorMessage.description}</FormErrorMessage>
          </FormControl>
          <FormControl mt={4} isInvalid={errorMessage.image}>
            <FormLabel>Image</FormLabel>
            <input
              type="file"
              accept="image/*"
              onChange={e => updateForm('image', e.target.files[0])}
            />
            <FormErrorMessage>{errorMessage.image}</FormErrorMessage>
          </FormControl>
          <div
            className={styles.submit}
            onClick={() => {
              setIsLoading(true);
              submitForm();
            }}>
            <Button isLoading={isLoading} colorScheme="blue" size="md">
              {blog ? 'Update' : 'Create'}
            </Button>
          </div>
        </div>
      </ScaleFade>
    </div>
  );
};

export default NewBlog;
