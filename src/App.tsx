import {
  Input,
  Button,
  Loader,
  Checkbox,
  Toggle,
  Radio,
  Select,
  Breadcrumbs,
  TabsComponent,
  Progress,
  Steps,
} from "../dist";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#333",
        padding: "100px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "80%",
        }}
      >
        <Breadcrumbs icon option={["Home", "Pricing", "Here"]}></Breadcrumbs>
        <TabsComponent
          options={[
            {
              tab: "JOIN NOW",
              id: "tab-1",
              content: (
                <>
                  <p>
                    By drastically reducing the amount of code that's shipped to
                    the user, we're achieving maximum performance.
                  </p>
                  <Input label="Join now"></Input>
                </>
              ),
            },
            {
              tab: "Who Should Use Ector",
              id: "tab-4",
              content:
                "Ector is tailored for web agencies seeking to streamline their Prestashop development process and provide exceptional e-commerce solutions to their clients. Whether you're an experienced developer or new to Prestashop, Ector offers the tools and resources needed to create outstanding online stores efficiently.",
            },
            {
              tab: "Reduced complexity",
              id: "tab-3",
              content:
                "Estimating how long it takes to build a project is hard. Especially with techniques that are new and constantly changing. That's why we've picked future proof tools that have already proven themselves",
            },
          ]}
        ></TabsComponent>
        <Input label="Your email" />
        <Input label="Your password" />
        <Input label="A very long sequence" />
        <Checkbox label="Checkbox"></Checkbox>
        <Toggle label="A toggle"></Toggle>
        <Select label="A select" option={["1", "2"]}></Select>
        <Radio label="Choice 1"></Radio>
        <Radio label="Choice 2"></Radio>
        <Radio label="Choice 3" disabled></Radio>
        <Button primary size="large">
          ciao
        </Button>
        <Loader mode="round"></Loader>
        <Loader mode="linear"></Loader>
        <Progress percentage={1} message="Work in progress..."></Progress>

        <Steps></Steps>
      </div>
    </div>
  );
}

export default App;
