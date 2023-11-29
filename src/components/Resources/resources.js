import React from "react";
import './resources.css'

export default function Resources() {
    return (
        <section>
            <h1>Video</h1>
            <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vXrQ_FhZmos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
            <h1 className="resource-h1">Further Resources</h1>
            <h2 className="resource-h2">Resource for finding menstrual products on UW Seattle Campus</h2>
            <div className="resource-paragraph">
                <p>Our Process
                <br>
                </br>
                Initially we had set out this project to help bring more aware of the full menstrual cycle and highlight information regarding the different phases that is often overlooked. Learning more about one’s own body is imperative to being in tune with your own health & well-being epsecially in womens reproductive health. When further exploring the problem spaace, we saw an information gap between the feminine product availability and accessibility. As we wanted to make this more functional for college students and help to optimize their experience in the best way possible being apart of the University of Washington Seattle Campus. Although we diverted from our initial idea we still feel it is very important to provide an information hub surrounding the topic. 
                </p>
                <p>Mastering the Monthly Cycle: A College Student’s Guide
                <br>
                </br>Navigating the Waves: Understanding Your Menstrual Cycle. It's a monthly symphony of changes, and understanding it can be a game-changer in managing the academic stress.
                </p>
                <p>Phase 1: Menstrual Phase (Days 1-5) - Self-Care Symphony
                <br>
                </br>
                In the first few days, consider it a period of introspection. Your body is renewing itself, so embrace a bit of solitude and self-care. Whether it's reading, meditation, or a quiet night in, this is your time.
                </p>
                <p>Phase 2: Follicular Phase (Days 6-14) - Academic A-Game
                <br>
                </br>
                As the curtain rises on the second act, your energy levels soar. Capitalize on this by tackling intellectually demanding tasks and diving into those challenging study sessions. The academic stage is yours to conquer.
                </p>
                <p>Phase 3: Ovulatory Phase (Days 15-17) - Social Spotlight
                <br>
                </br>
                Mid-cycle marks your social peak. This is when networking, group projects, or social events can be approached with confidence. Channel that charisma and make your mark on the social scene.
                </p>
                <p>Phase 4: Luteal Phase (Days 18-28) - Stress-Proof Strategies
                <br>
                </br>
                As the cycle winds down, stress might make an entrance. Fortify yourself with stress-management techniques. Whether it's a fitness routine, mindful activities, or time with friends, prioritize your mental well-being.
                </p>
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
