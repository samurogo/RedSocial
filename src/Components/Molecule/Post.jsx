import '../Molecule/Post.css';
import { Paragraph } from "../Atom/Paragraph";
import { PostProfile } from "../Atom/PostProfile";
export function Post() {
    let image = "https://s3-alpha-sig.figma.com/img/b021/1f3d/102d8796b6a1882ff00dddefa594879?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ijETBs2d4PKECMVPfOIKtDdiohtqj9PRIFsF21k51X8i7c9K-vty-X-KYBiqowdZgM71tLqxRsmw95OFjE97Yx04VuTMcr3s8WAK7BUSbPkg3wtnpUIq37e~kCehD5YXW7TnBYer~CiBGddLlJwnoLIyLZ2TFBwCFws6K9qj5XVcBxkXMO5z53DdONzfVUpKOwguaBRl5pju21vhAVgATd8J~lLXOrKaI1Ze5rO~iwGfDAI70RokdUSFdk18HBXL6I2orGcMx18Fqc7Vly3Yl5JjqrajcaHuVpCJ-lJYJLA8kmaafJI5caaCctwxfF3dKZxqo5TUra5K28Kwp3MdRg__";
    let banner = "https://s3-alpha-sig.figma.com/img/062c/5214/2b13f65cb595899054d25579108619e2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CTwOyQJPtl4d3vsmEyqUprlAnibc38DKLEZosgFyyx8GXuYQ7h-j2rTYZmcrkLqp0KOVnjaiQB1FyrVNhlUCdsP6bw462-mugg3I3XCcxi9qsp8UpmjWm7nSSOcNFZzqoGAElvCIG4aO32pXCsKFmhYUMuEW-quykVUr5e-ossiChx-4Fqi4Et5hbPpmYeSjIWzHmSxBO9eObDuc3dFjCTnot7zGVPaGoa07SezILH1QMRbL4kqglA9rcoTEOyWE~hXSH6iPd6L5nG2J5vf6bmWbO4W5J947tx6HzjYPEMLOGjU~m66XnA2veYs4kmc9hqNGrymJN8FbN2q5Rf0UpA__";
    return (
        <>
            <div className="post_divider">
                <article className="post">
                    <PostProfile image={image} name="Joanna Rosenbaum" date="4 horas" />
                    <div className="post_description">
                        <Paragraph size="12px" text="Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link." />
                    </div>
                    <div className="post_banner">
                        <img className="post_thumbnail" src={banner} alt="" />
                    </div>
                    <div className="post_interactions">
                        <nav className="post_interactions_nav">
                            <li>
                                <span className="post_interactions_icon"></span>
                                <a href="" className="post_interactions_link">10 me gusta</a>
                            </li>
                            <li>
                                <span className="post_interactions_icon"></span>
                                <a href="" className="post_interactions_link_inherit">2 Comentarios</a>
                            </li>
                            <li>
                                <span className="post_interactions_icon"></span>
                                <a href="" className="post_interactions_link">0 Compartir</a>
                            </li>
                        </nav>
                    </div>
                </article>
                <div className="post_bottom">
                    <div className="post_bottom_interactions">
                        <span className="post_interactions_icon"></span>
                        <a href="" className="post_interactions_link">10 me gusta</a>
                    </div>
                    <div className="d-flex-beetween">
                        <div className="post_bottom_interactions">
                            <span className="post_interactions_icon"></span>
                            <a href="" className="post_interactions_link">2 Comentarios</a>
                        </div>
                        <div className="post_bottom_interactions">
                            <span className="post_interactions_icon"></span>
                            <a href="" className="post_interactions_link">0 Compartir</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}