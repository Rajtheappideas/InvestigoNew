import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lottie from "react-lottie";
import Loader from "./assets/animations/Loader.json";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallBack";
import { UserProvider } from "./context/UserContext";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

// import using lazy components
const Home = lazy(() => import("./pages/Home"));
const Aboutus = lazy(() => import("./pages/Aboutus"));
const Packages = lazy(() => import("./pages/Packages"));
const Contactus = lazy(() => import("./pages/Contactus"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const HowitsWorks = lazy(() => import("./pages/HowitsWorks"));
const Benefits = lazy(() => import("./pages/Benefits"));
const Account = lazy(() => import("./pages/Account"));
const Blog = lazy(() => import("./pages/Blog"));
const Career = lazy(() => import("./pages/Career"));
const LoyaltyProgram = lazy(() => import("./pages/LoyaltyProgram"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const Project = lazy(() => import("./pages/Project"));
const Support = lazy(() => import("./pages/Support"));
const AffiliateProgram = lazy(() => import("./pages/AffiliateProgram"));
const ListYourProgram = lazy(() => import("./pages/ListYourProgram"));
const KeyRisks = lazy(() => import("./pages/KeyRisks"));
const SingleBlog = lazy(() => import("./pages/SingleBlog"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));
const Accomplished = lazy(() => import("./pages/Accomplished"));
const CareerDetails = lazy(() => import("./pages/CareerDetails"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const ChangePassword = lazy(() => import("./pages/Changepassword"));
const PrivateRoute = lazy(() => import("./pages/PrivateRoute"));
const Error404 = lazy(() => import("./pages/Error404"));

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.reload();
        }}
      >
        <Suspense
          fallback={
            <div
              style={{
                position: "absolute",
                top: "30%",
                left: "40%",
                translate: "transform(-50%, -50%)",
              }}
            >
              <Lottie options={defaultOptions} height={300} width={300} />
            </div>
          }
        >
          <UserProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/account" element={<Account />} />
              <Route path="/howitsworks" element={<HowitsWorks />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/accomplished" element={<Accomplished />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/career" element={<Career />} />
              <Route path="/careerdetails" element={<CareerDetails />} />
              <Route path="/loyalityprogram" element={<LoyaltyProgram />} />
              <Route path="/cookiepolicy" element={<CookiePolicy />} />
              <Route path="/projectdetails" element={<ProjectDetails />} />
              <Route path="/project" element={<Project />} />
              <Route path="/singleblog" element={<SingleBlog />} />
              <Route path="/support" element={<Support />} />
              <Route path="/affiliateprogram" element={<AffiliateProgram />} />
              <Route path="/listyourproperty" element={<ListYourProgram />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/keyrisks" element={<KeyRisks />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/termsandconditions"
                element={<TermsAndConditions />}
              />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route
                path="/changepassword"
                element={
                  <PrivateRoute>
                    <ChangePassword />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </UserProvider>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
