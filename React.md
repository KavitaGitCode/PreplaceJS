
useState
useEffect
useRef
useCallback
useMemo
useDispatch
useReduce


---------------------------------------------
: npm run start...local ...look into package.json (configure)...start.. (project in devlopment mode)
: npm run build...create build of proj for production

<componentName></compnentName> ...you have to "render" the function component like this in root or whereever you want...this is how REACTDOM understand

const Title = () => (
    <h1 className="heading">this is one way to write component</h1>
)

const HeadingComp = () => (
    <>
    <h1 className="heading">this is another way to write component</h1>
    <Title />
    </>
)

