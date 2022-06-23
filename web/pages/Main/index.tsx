import { Outlet } from "react-router-dom";
import { ContentWrapper } from "../../shared/style";

function Main() {
  return (
    <main>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </main>
  );
}
export default Main;
