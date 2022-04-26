import type { NextPage } from "next";

const CookiePolicy: NextPage = () => {
  return (
    <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "20px" }}>
      <h2>Cookies</h2>
      <p>
        Our website uses cookies. By using our website and agreeing to this
        policy, you consent to our use of cookies in accordance with the terms
        of this policy.
      </p>

      <h2>What are Cookies</h2>
      <p>
        Cookies consist of pieces of text, often including unique identifiers,
        that are sent by web servers to web browsers, and which may then be sent
        back to the server each time the browser requests a page from the
        server. <br />
        <br /> Cookies can be used by web servers to identity and track users as
        they navigate different pages on a website and to identify users
        returning to a website.
      </p>

      <h2>How We Use Cookies</h2>
      <p>
        We only use 3rd party cookies for site analytics and behaviour tracking.
        Please see more information below. We do not use any other cookies such
        as: login, form prefill, or newsletter registration cookies at this
        stage. Please note that as our services expand we may implement
        additional cookies from the above or not limited to the above list.
        Please check back to this document in order to keep updated on the types
        of cookies implemented on streameye.com
      </p>

      <h2>3rd Party Cookies</h2>
      <p>
        This site uses Google Analytics which is one of the most widespread and
        trusted analytics solution on the web for helping us to understand how
        you use the site and ways that we can improve your experience. These
        cookies may track things such as how long you spend on the site and the
        pages that you visit so we can continue to produce engaging content.
        <br />
        <br />
        This site uses Facebook Pixel. This helps us identify traffic coming
        from our social network activities and landing on our website. It also
        helps us deliver our posts and information better.
      </p>

      <h2>More Information</h2>
      <p>
        Hopefully the information above has clarified in some detail how we use
        cookies, however if you are still uncertain or you wish to receive
        further information, please get in touch.
        <br />
        <br />
        You can contact us at any time using the Contact section on our website
        or directly writing to legal -at- streameye -dot- com
      </p>
    </div>
  );
};

export default CookiePolicy;
