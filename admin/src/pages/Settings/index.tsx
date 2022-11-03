import React, { memo } from "react";

import {
  Layout,
  ContentLayout,
  BaseHeaderLayout,
  Select,
  Option,
  Button,
  TextInput,
  Box,
} from "@strapi/design-system";

import {
  ButtonContainer,
  InputContainer,
  StyledAlert,
  StyledTypography,
} from "./styles";
import {
  checkMailchimpConnection,
  checkConvertKitConnection,
  getSettings,
  setSettings,
} from "../../utils/api";

interface DefaultSettings {
<<<<<<< HEAD
  apiKey?: string;
  apiSecret?: string;
  dc?: string;
  listID?: string;
  formId?: string;
=======
  apiKey: string;
  apiSecret: string;
  dc: string;
  listID: string;
  formId: string;
>>>>>>> typescript-refactor
}

const defaultSettings = {
  apiKey: "",
  apiSecret: "",
  dc: "",
  listID: "",
  formId: "",
};

const Settings = () => {
<<<<<<< HEAD
  const [selectedProvider, setSelectedProvider] = React.useState<
    string | undefined
  >();
  const [fields, setFields] = React.useState<DefaultSettings>();
  // const [keys, setKeys] = React.useState<object>();

  const [successfulMessage, setSuccessfulMessage] = React.useState<
    string | undefined
  >();
=======
  const [selectedProvider, setSelectedProvider] = React.useState<string | undefined>(
    undefined
  );
  const [fields, setFields] = React.useState<DefaultSettings>(defaultSettings);
  const [keys, setKeys] = React.useState<object>({});

  const [successfulMessage, setSuccessfulMessage] = React.useState<
    string | null
  >(null);
>>>>>>> typescript-refactor
  const [isError, setIsError] = React.useState<boolean>(false);

  const providers = ["mailchimp", "convertkit"];

  const providerFunctions = {
    mailchimp: {
      name: "Mailchimp",
      validator: () => {
<<<<<<< HEAD
        if (!fields?.apiKey || !fields?.dc || !fields?.listID) {
=======
        if (!fields.apiKey || !fields.dc || !fields.listID) {
>>>>>>> typescript-refactor
          return false;
        }

        return true;
      },
      checkConnection: async () => {
        try {
          await checkMailchimpConnection();
          setIsError(false);
          setSuccessfulMessage("Connection Successful");
        } catch (error) {
          setIsError(true);
<<<<<<< HEAD
          setSuccessfulMessage("Connection Unsuccessful");
=======
          setSuccessfulMessage(null);
>>>>>>> typescript-refactor
        }
      },
      renderView: () => (
        <InputContainer>
          <div>
            <TextInput
              placeholder="API Key"
              label="API Key"
              required
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  apiKey: e.target.value,
                }))
              }
<<<<<<< HEAD
              value={fields?.apiKey}
=======
              value={fields.apiKey}
>>>>>>> typescript-refactor
              type="password"
            />
          </div>

          <div>
            <TextInput
              placeholder="DC"
              label="DC"
              required
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  dc: e.target.value,
                }))
              }
<<<<<<< HEAD
              value={fields?.dc}
=======
              value={fields.dc}
>>>>>>> typescript-refactor
            />
          </div>

          <div>
            <TextInput
              placeholder="List ID"
              label="List ID"
              required
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  listID: e.target.value,
                }))
              }
<<<<<<< HEAD
              value={fields?.listID}
=======
              value={fields.listID}
>>>>>>> typescript-refactor
            />
          </div>

          <StyledTypography as="h3">
            Read{" "}
            <a
              href="https://mailchimp.com/en-gb/help/find-audience-id/"
              target="_blank"
            >
              here
            </a>{" "}
            to learn how to get the list ID from mailchimp.
          </StyledTypography>
        </InputContainer>
      ),
    },
    convertkit: {
      name: "Convert Kit",
      validator: () => {
<<<<<<< HEAD
        if (!fields?.apiKey || !fields?.apiSecret || !fields?.formId) {
=======
        if (!fields.apiKey || !fields.apiSecret || !fields.formId) {
>>>>>>> typescript-refactor
          return false;
        }

        return true;
      },
      checkConnection: async () => {
        try {
          await checkConvertKitConnection();
          setIsError(false);
          setSuccessfulMessage("Connection Successful");
        } catch (error) {
          setIsError(true);
<<<<<<< HEAD
          setSuccessfulMessage("Connection Unsuccessful");
=======
          setSuccessfulMessage(null);
>>>>>>> typescript-refactor
        }
      },
      renderView: () => (
        <InputContainer>
          <div>
            <TextInput
              placeholder="API Key"
              label="API Key"
              required
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  apiKey: e.target.value,
                }))
              }
<<<<<<< HEAD
              value={fields?.apiKey}
=======
              value={fields.apiKey}
>>>>>>> typescript-refactor
            />
          </div>

          <div>
            <TextInput
              placeholder="API Secret"
              label="API Secret"
              required
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  apiSecret: e.target.value,
                }))
              }
<<<<<<< HEAD
              value={fields?.apiSecret}
=======
              value={fields.apiSecret}
>>>>>>> typescript-refactor
              type="password"
            />
          </div>

          <div>
            <TextInput
              placeholder="Form ID"
              label="Form ID"
              required
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  formId: e.target.value,
                }))
              }
<<<<<<< HEAD
              value={fields?.formId}
=======
              value={fields.formId}
>>>>>>> typescript-refactor
            />
          </div>
        </InputContainer>
      ),
    },
  };

  React.useEffect(() => {
    getUserSettings();
  }, []);

  const getUserSettings = async () => {
    const {
      data: { provider, ...data },
    } = await getSettings();

<<<<<<< HEAD
    // setKeys(data);
=======
    setKeys(data);
>>>>>>> typescript-refactor
    setFields(data);
    setSelectedProvider(provider);
  };

  const setUserSettings = async () => {
<<<<<<< HEAD
    try {
      const { data } = await setSettings({
        ...fields,
        provider: selectedProvider,
      });

      setSuccessfulMessage("Settings saved successfully");
    } catch (error) {
      setIsError(true);
      setSuccessfulMessage("Settings not saved");
=======
    const { data } = await setSettings({
      ...fields,
      provider: selectedProvider,
    });

    try {
      setKeys(data);
      setSuccessfulMessage("Settings saved successfully");
    } catch (error) {
      setIsError(true);
      setSuccessfulMessage(null);
>>>>>>> typescript-refactor
    }
  };

  return (
    <Layout>
      <BaseHeaderLayout
        title="Strapi Newsletter"
        subtitle="Setup Your Newsletter Provider"
      />

      <ContentLayout>
        {successfulMessage && (
          <StyledAlert
            closeLabel="Close alert"
            title="Success"
            variant="success"
            onClose={() => {
<<<<<<< HEAD
              setSuccessfulMessage(undefined);
=======
              setSuccessfulMessage(null);
>>>>>>> typescript-refactor
            }}
          >
            {successfulMessage}
          </StyledAlert>
        )}

        {isError && (
          <StyledAlert
            closeLabel="Close alert"
            title="Error"
            variant="danger"
            onClose={() => {
              setIsError(false);
            }}
          >
            Error occurred, Please check your settings
          </StyledAlert>
        )}

        <Box padding={8} shadow="tableShadow" background="neutral0" hasRadius>
          <Select
            label="Email Newsletter Provider"
            value={selectedProvider}
<<<<<<< HEAD
            onChange={
              // (e) => {
              // if (e !== selectedProvider) {
              //   setFields(defaultSettings);
              // } else {
              //   setFields(keys);
              // }
              setSelectedProvider
              // }
            }
=======
            onChange={(e) => {
              if (e !== selectedProvider) {
                setFields(defaultSettings);
              } else {
                setFields(keys);
              }
              setSelectedProvider(e);
            }}
>>>>>>> typescript-refactor
          >
            {providers.map((provider) => (
              <Option key={provider} value={provider}>
                {providerFunctions[provider].name}
              </Option>
            ))}
          </Select>
          <div>
            {selectedProvider &&
              providerFunctions[selectedProvider].renderView()}
          </div>

          <StyledTypography as="h3">
            Configure A Newsletter Provider and Click On Check Connection Button
            After Saving Your Settings To Check If Your API Keys are Working.
          </StyledTypography>

          <ButtonContainer>
            <Button
              onClick={async () => {
                const validateResponse =
<<<<<<< HEAD
                  selectedProvider != undefined
                    ? providerFunctions[selectedProvider].validator()
                    : "";
=======
                  selectedProvider != undefined ? providerFunctions[selectedProvider].validator() : '';
>>>>>>> typescript-refactor

                if (!validateResponse) return;

                await setUserSettings();
              }}
            >
              Save Keys
            </Button>
            <Button
              variant="tertiary"
<<<<<<< HEAD
              disabled={!fields?.apiKey}
              onClick={() => {
                selectedProvider != undefined
                  ? providerFunctions[selectedProvider].checkConnection()
                  : "";
=======
              disabled={
                Object.entries(keys).length == 0 ||
                fields.apiKey !== keys.apiKey
              }
              onClick={() => {
                selectedProvider != undefined ? providerFunctions[selectedProvider].checkConnection() : '';
>>>>>>> typescript-refactor
              }}
            >
              Check Connection
            </Button>
          </ButtonContainer>
        </Box>
      </ContentLayout>
    </Layout>
  );
};

export default memo(Settings);
