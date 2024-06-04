
useState
useEffect
useRef
useCallback
useMemo
useDispatch
useReduce


---------------------------------------------
: npm run start...local ...look into package.json (configure)...start.. (project in devlopment mode)
: npm run build...create final production read app
: npm run dev ... starts the development server, enabling features like live-reloading and hot module replacement,


Hot Module Replacement (HMR):
It means that parcel will keep a track of all the files which you are updating.
There is File Watcher Algorithm (written in C++). It keeps track of all the files which are changing realtime and it tells the server to reload.
These are all done by PARCEL


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

