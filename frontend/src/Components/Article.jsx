import classes from './Article.module.css';

export const Article = (props) => {
    const classNames = `${classes.article} ${props.className && props.className}`
    return (
        <article className={classNames}>{props.children}</article>
    )
}

export const ArticleLeft = (props) => {
    return (
        <Article className={classes.articleLeft}>{props.children}</Article>
    )
}

export const ArticleRight = (props) => {
    return (
        <Article className={classes.articleRight}>{props.children}</Article>
    )
}
