import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import * as React from 'react';

interface ChildComponentProps extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}

const ScrollToTop: React.FC<ChildComponentProps> = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default withRouter(ScrollToTop);
