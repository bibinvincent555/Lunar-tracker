/* ================================
   Global Styles
================================ */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  background: radial-gradient(circle at top, #0a0f1f, #02040a);
  color: #e5e7eb;
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* ================================
   Header
================================ */
.header {
  background: rgba(14, 165, 233, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-size: 2rem;
  font-weight: 700;
  color: #38bdf8;
}

.tagline {
  font-size: 1.1rem;
  color: #9ca3af;
  margin-top: 0.5rem;
}

/* ================================
   Search Section
================================ */
.search-section {
  margin: 2rem auto;
  width: 100%;
  max-width: 700px;
  padding: 1rem;
  text-align: center;
}

.search-box {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.15);
}

.search-box input {
  flex: 1;
  padding: 1rem;
  font-size: 1rem;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
}

.search-box input::placeholder {
  color: #9ca3af;
}

.search-btn {
  background: linear-gradient(135deg, #0ea5e9, #38bdf8);
  border: none;
  color: #fff;
  padding: 0 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.search-btn:hover {
  background: linear-gradient(135deg, #38bdf8, #0ea5e9);
  box-shadow: 0 0 15px rgba(14, 165, 233, 0.6);
}

.search-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* ================================
   Loading State
================================ */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(56, 189, 248, 0.2);
  border-top: 4px solid #38bdf8;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ================================
   Error Display
================================ */
.error-container {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.4);
  color: #f87171;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 12px;
  max-width: 600px;
  text-align: center;
  font-weight: 500;
}

/* ================================
   Moon Phases Display
================================ */
.moon-phases-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}

.phase-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s;
  backdrop-filter: blur(8px);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.6s ease forwards;
}

.phase-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Highlight Today */
.current-day {
  border: 2px solid #38bdf8;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
  background: rgba(14, 165, 233, 0.1);
}

/* Card Header */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.date-info {
  text-align: left;
}

.date-main {
  font-weight: 600;
  font-size: 1rem;
}

.date-sub {
  font-size: 0.85rem;
  color: #9ca3af;
}

.illumination-badge {
  background: #0ea5e9;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
}

/* Moon Display */
.moon-display {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  flex-direction: column;
}

.moon-container {
  position: relative;
  width: 80px;
  height: 80px;
}

.moon-visual {
  background: #0f172a;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.moon-illuminated {
  background: #fef9c3; /* pale yellowish */
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.moon-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 200, 0.25), transparent 70%);
  z-index: -1;
}

.phase-info {
  text-align: center;
}

.phase-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
}

.phase-description {
  font-size: 0.9rem;
  color: #9ca3af;
}

/* Card Footer */
.card-footer {
  margin-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 0.8rem;
}

.time-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
}

.time-item {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.time-label {
  color: #9ca3af;
}

.time-value {
  font-weight: 600;
  margin-top: 0.2rem;
}

/* ================================
   Show More Button
================================ */
.show-more-container {
  text-align: center;
  margin: 2rem 0;
}

.show-more-btn {
  background: none;
  border: 2px solid #38bdf8;
  color: #38bdf8;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.show-more-btn:hover {
  background: #38bdf8;
  color: #02040a;
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.7);
}

/* ================================
   Footer
================================ */
.footer {
  padding: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: #9ca3af;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
}

.footer-links a {
  color: #38bdf8;
  text-decoration: none;
  margin: 0 0.5rem;
}

.footer-links a:hover {
  text-decoration: underline;
}

/* ================================
   Screen Reader Only
================================ */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
