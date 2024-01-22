import {
  Input,
  Button,
  Loader,
  Checkbox,
  Toggle,
  Radio,
  Select,
  Breadcrumbs,
  Tab,
  Progress,
  Steps,
  Title,
  Counter,
  Boost,
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
        <Breadcrumbs option={["Home", "Pricing", "Here"]}></Breadcrumbs>
        <Tab
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
        ></Tab>
        <Title label="This is a animate Title"></Title>
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
        <Progress percentage={20} message="Work in progress..."></Progress>
        <Counter label="SEO" description="Performance."></Counter>
        <Boost></Boost>

        <Steps
          redirect="www.redirect.it"
          options={[
            {
              name: "Details",
              href: "#",
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
              name: "Application form",
              href: "#",
              content: (
                <>
                  <p>
                    Estimating how long it takes to build a project is hard.
                    Especially with techniques that are new and constantly
                    changing. That's why we've picked future proof tools that
                    have already proven themselves
                  </p>
                  <Button primary size="large">
                    Try it
                  </Button>
                </>
              ),
            },
            {
              name: "Preview",
              href: "#",
              content:
                "Estimating how long it takes to build a project is hard. Especially with techniques that are new and constantly changing. That's why we've picked future proof tools that have already proven themselves",
            },
          ]}
        ></Steps>
      </div>
    </div>
  );
}

export default App;
