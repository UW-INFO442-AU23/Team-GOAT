import React from "react";
import './resources.css'

export default function Resources() {
    return (
        <section>
            <h1>Video</h1>
            <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/watch?v=vXrQ_FhZmos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
            <h1>More Resources</h1>
            <div>
<h2><a href="https://facilities.uw.edu/catalog/free-menstrual-product-program">Official list of UW buildings and room numbers with free menstraul products</a></h2>
<h2><a href="https://sites.uw.edu/qcenter/programs-and-services-hub/menstruation-station/">Menstruation Station at the HUB</a></h2>
            </div>

            <footer>
                <div>
                    <p>&copy; CampusCare 2023 INFO 442 Team GOAT</p>
                </div>
            </footer>

        </section>
      )
}
