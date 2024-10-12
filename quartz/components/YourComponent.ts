import styles from "./styles/YourComponent.scss"
 
export default (() => {
  function YourComponent() {
    return <p>Example Component</p>
  }
 
  YourComponent.css = styles
  return YourComponent
}) satisfies QuartzComponentConstructor