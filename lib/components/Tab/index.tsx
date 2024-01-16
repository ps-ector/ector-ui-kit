import { Tabs, TabList, Tab, TabPanel } from "react-aria-components";

type Options = {
  tab: string;
  id: string;
  content: string;
};

export const TabsComponent = ({
  options,
  ...props
}: {
  options: Options[];
}) => {
  return (
    <>
      <Tabs defaultSelectedKey="keyboard" {...props}>
        <TabList className="react-aria-TabList" aria-label="Input settings">
          {options.map((opt) => (
            <Tab className="react-aria-Tab" id={opt.id}>
              {opt.tab}
            </Tab>
          ))}
        </TabList>
        {options.map((opt) => (
          <TabPanel className="react-aria-TabPanel" id={opt.id}>
            {opt.content}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};
