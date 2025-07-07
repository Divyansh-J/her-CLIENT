import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './LetterPage.css';

function LetterPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="letter-container">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="letter-loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="loading-heart"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="60" height="60" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 42s-13.5-8.5-13.5-18.5S16.5 7 24 15.5 37.5 7 37.5 23.5 24 42 24 42z" fill="#ffb6b9" stroke="#a18cd1" strokeWidth="2"/>
              </svg>
            </motion.div>
            <motion.div 
              className="loading-text"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading your letter...
            </motion.div>
            <div className="loading-dots">
              <motion.span 
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
              />
              <motion.span 
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              />
              <motion.span 
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div 
            className="letter-content"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.span 
              className="letter-heart"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 42s-13.5-8.5-13.5-18.5S16.5 7 24 15.5 37.5 7 37.5 23.5 24 42 24 42z" fill="#ffb6b9" stroke="#a18cd1" strokeWidth="2"/>
              </svg>
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              A Letter for You
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              I'm so very glad that I met you, that we opened up to each other, that I took a liking to you and here we are. We spent the whole college together, making each other feel at home. It's so amazing how every single decision led me towards you - each and everything feels like a setup, a setup to experience the love each of us has seen glimpses of but never truly experienced.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Thank you for making my college such amazing memories. We've come so far together, and now as this chapter closes and a new one begins, I can't help but think about how perfectly everything fell into place.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              When I received your gift through the courier - the first flower I gave to you and that letter I've been asking you for so long, which was so amazingly written - my heart just melted. I really loved the effort you put into all the gifts in the courier. And I have already gone through the letter in my head so many times, and it always makes me cry - it's so beautiful.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              I understand that you felt all alone and sad when you finally got the job and no one was there to even celebrate properly, and it pains me so deeply. You deserved to have the whole world celebrate with you, and I'm sorry I wasn't there in that moment when you needed it most.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              I have already said a lot in the video, but here I just want you to know how proud I am of you. You worked so hard and eventually achieved it. Your placement is so special to me, and I want to show you that. This new chapter in your life - it's everything you deserve and more.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
            >
              It's been a pleasure falling for you. The way you have helped me realize my faults and to act on them - you will be one of the biggest reasons why I will be successful in life and career, because with you I realized what I need to be for the people I love.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
            >
              You are my courage, my universe, my everything. Your love has healed me, kicked me into reality, made me understand so many aspects of life and how to keep moving even when there is no hope. The world can be bad, but you don't stop being kind to the world.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.1 }}
            >
              You think I'm intellectual and all, that I know stuff, but I have never learned so much from anyone but you, directly or indirectly. You've taught me things no book could, shown me depths of love and strength I knew existed but not outside my family.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.3 }}
            >
              I know this website is so basic, but I poured my heart into it. I know you will always remember this website, I know you will value it, even if it's just a static HTML page. That's why you are so special to me - you see the love behind the simplest gestures.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              Please accept my love in the form of this website and gift, and I hope you like it or even love it. You've made college beautiful, you've made every moment count, and now as we step into this new phase of our lives, I want you to know that you mean everything to me.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.7 }}
            >
              College is ending, but our story is just beginning. From spending every day together in college to now watching you achieve your dreams - it's been the most beautiful journey.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.9 }}
            >
              I love you the most, jaane.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <Link to="/reveal" className="cta-button">
                See your gift
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LetterPage; 