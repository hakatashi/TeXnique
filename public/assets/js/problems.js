// Have a problem to add? Submit it here: https://forms.gle/DXjPeTL5DbJBhKRv8

let problems = [
	{
		"title": "Reflexivity",
		"description": "The simplest equation.",
		"latex": String.raw`a = a`
	},
	{
		"title": "Commutative Law of Addition",
		"description": "The simplest algebraic law.",
		"latex": String.raw`a + b = b + a`
	},
	{
		"title": "Pythagorean Theorem (Basic)",
		"description": "Right triangles.",
		"latex": String.raw`a^2 + b^2 = c^2`
	},
	{
		"title": "Natural Logarithm",
		"description": "Definition.",
		"latex": String.raw`\ln e = 1`
	},
	{
		"title": "Arithmetic Mean",
		"description": "Average of two numbers.",
		"latex": String.raw`\bar{x} = \frac{a + b}{2}`
	},
	{
		"title": "Binary Operation on a Set",
		"description": "Definition of a binary operation.",
		"latex": String.raw`\mu : A \times A \to A`
	},
	{
		"title": "Sine Rule",
		"description": "Law of sines.",
		"latex": String.raw`\frac{a}{\sin A} = \frac{b}{\sin B}`
	},
	{
		"title": "Geometric Series (Infinite)",
		"description": "Converges when |r| < 1.",
		"latex": String.raw`\sum_{n=0}^{\infty} r^n = \frac{1}{1-r}`
	},
	{
		"title": "Market Force",
		"description": "Force as the negative gradient of potential, applied to finance market dynamics. (arXiv:2601.00293)",
		"latex": String.raw`F = -\frac{dV(x)}{dx}`
	},
	{
		"title": "Category Identity Laws",
		"description": "Identity axiom in the definition of a category. (arXiv:1612.09375)",
		"latex": String.raw`f \circ 1_A = f = 1_B \circ f`
	},
	{
		"title": "Cycle Mean",
		"description": "Average edge weight of a cycle in a weighted directed graph. (arXiv:2601.00094)",
		"latex": String.raw`\lambda(C) = \frac{w(C)}{|C|}`
	},
	{
		"title": "Irreducible Polynomial Factorization",
		"description": "Factorization of a polynomial into irreducible factors in a normic bundle. (arXiv:2601.00052)",
		"latex": String.raw`P(x) = c\cdot\prod_{i=1}^s P_i(x)^{e_i}`
	},
	{
		"title": "Black-Scholes Ground State",
		"description": "Probability density of the QHO ground state equals the Black-Scholes integrand. (arXiv:2601.00293)",
		"latex": String.raw`P_{g,HO}(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}`
	},
	{
		"title": "Shapiro's Lemma",
		"description": "Cohomology of an induced module is isomorphic to the cohomology of the subgroup. (arXiv:2601.00052)",
		"latex": String.raw`H^i(G, \mathrm{Ind}_H^G M) \simeq H^i(H, M)`
	},
	{
		"title": "Categorical Composition",
		"description": "Composition law of a category, mapping pairs of morphisms to a morphism. (arXiv:1612.09375)",
		"latex": String.raw`\mathscr{A}(B, C) \times \mathscr{A}(A, B) \to \mathscr{A}(A, C)`
	},
	{
		"title": "Quantum Annihilation Operator",
		"description": "Annihilation (ladder) operator of the quantum harmonic oscillator in position representation. (arXiv:2601.00293)",
		"latex": String.raw`\hat{a} = \frac{\alpha}{\sqrt{2}}\left(x + \frac{i}{\alpha^2}\hat{p}_x\right)`
	},
	{
		"title": "Perturbation Matrix Element",
		"description": "Matrix element of the perturbation Hamiltonian in Dirac bra-ket notation. (arXiv:2601.00293)",
		"latex": String.raw`H_{nm}^{\prime} = \langle\psi_n|H^{\prime}|\psi_m\rangle`
	},
	{
		"title": "Optimum Cycle Mean Bounds",
		"description": "Any cycle's mean lies between the minimum and maximum cycle means. (arXiv:2601.00094)",
		"latex": String.raw`\lambda_{\min} \leq \frac{w(C)}{|C|} \leq \lambda_{\max}`
	},
	{
		"title": "Mean Quantile Function",
		"description": "The Wasserstein Fréchet mean expressed as a pointwise average of quantile functions. (arXiv:1110.2295)",
		"latex": String.raw`\bar{\Phi}^{-1}(t) = \frac{1}{n}\sum_{i=1}^n \Phi_i^{-1}(t)`
	},
	{
		"title": "Black-Scholes d Parameter",
		"description": "Key parameter in the Black-Scholes European option pricing formula. (arXiv:2601.00293)",
		"latex": String.raw`d_{\pm} = \frac{\ln(S_0/K) + (r \pm \sigma^2/2)T}{\sigma\sqrt{T}}`
	},
	{
		"title": "Bienaymé Tree Scaling Convergence",
		"description": "Convergence of rescaled critical Bienaymé trees to the Brownian continuum random tree. (arXiv:2601.00119)",
		"latex": String.raw`\left(\frac{1}{\sqrt{n}}\cdot\tau_n,\frac{1}{\sqrt{n}}\cdot\tau_n'\right)\xrightarrow[n\to\infty]{\mathrm{d}}\left(\frac{2}{\sigma}\cdot\mathcal{T},\frac{2}{\sigma'}\cdot\mathcal{T}'\right)`
	},
	{
		"title": "Mackey's Restriction Formula",
		"description": "Decomposition of a restricted induced module as a direct sum over double cosets. (arXiv:2601.00052)",
		"latex": String.raw`\mathrm{Res}_H^G\mathrm{Ind}_N^G M \cong \bigoplus_{g\in H\backslash G/N}\mathrm{Ind}_{H\cap gNg^{-1}}^H\mathrm{Res}_{H\cap gNg^{-1}}^{gNg^{-1}}\,{}^g M`
	},
	{
		"title": "ℓ₂ Wasserstein Distance",
		"description": "Distance between two probability distributions in terms of their quantile functions. (arXiv:1110.2295)",
		"latex": String.raw`d_W(\phi_i, \phi_{i'}) = \left\{\int_0^1\left[\Phi_i^{-1}(t) - \Phi_{i'}^{-1}(t)\right]^2 dt\right\}^{1/2}`
	},
	{
		"title": "Stationary Schrödinger Equation",
		"description": "Schrödinger equation for a particle in the quantum harmonic oscillator potential. (arXiv:2601.00293)",
		"latex": String.raw`\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} + \left(E - \frac{m\omega^2}{2}x^2\right)\psi = 0`
	},
	{
		"title": "Black-Scholes Call Option",
		"description": "Price of a European call option under the Black-Scholes model. (arXiv:2601.00293)",
		"latex": String.raw`c = S_0 N(d_+) - Ke^{-rT}N(d_-)`
	},
	{
		"title": "Symbolic Sample Variance",
		"description": "Sample variance for interval-valued symbolic data (Billard–Diday formula). (arXiv:1110.2295)",
		"latex": String.raw`S^2 = \frac{1}{3n}\sum_{i=1}^n\left(b_i^2+b_ia_i+a_i^2\right) - \frac{1}{4n^2}\left[\sum_{i=1}^n(a_i-b_i)\right]^2`
	},
	{
		"title": "QHO Hamiltonian",
		"description": "Hamiltonian operator of the one-dimensional quantum harmonic oscillator. (arXiv:2601.00293)",
		"latex": String.raw`H = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + \frac{1}{2}m\omega^2 x^2`
	},
	{
		"title": "Brownian CRT Pseudo-distance",
		"description": "Pseudo-distance on [0,1] induced by a Brownian excursion, defining the CRT metric. (arXiv:2601.00119)",
		"latex": String.raw`d_{\mathbf{e}}(s_1,s_2) = \mathbf{e}_{s_1}+\mathbf{e}_{s_2}-2\min_{[s_1,s_2]}\mathbf{e}`
	},
	{
		"title": "Wasserstein Variance of the Mean",
		"description": "Variance of the Wasserstein Fréchet mean in terms of pairwise quantile correlations. (arXiv:1110.2295)",
		"latex": String.raw`\sigma_{\bar{y}}^2 = \frac{1}{n^2}\sum_{i=1}^n\sum_{j=1}^n\rho_{i,j}\sigma_i\sigma_j`
	},
	{
		"title": "Quantum Well Ground State",
		"description": "Ground state wave function of a particle in an infinite square well (quantum well model). (arXiv:2601.00293)",
		"latex": String.raw`\psi_g(x) = \frac{1}{\sqrt{a}}\sin\left[\frac{\pi}{2a}(x+a)\right]`
	},
	{
		"title": "Billard–Diday Covariance",
		"description": "Sample covariance index between two interval-valued symbolic variables. (arXiv:1110.2295)",
		"latex": String.raw`C_B(Y_1,Y_2) = \frac{1}{3n}\sum_{i=1}^n G_{i1}G_{i2}\sqrt{Q_{i1}Q_{i2}}`
	},
	{
		"title": "QHO General Wavefunction",
		"description": "nth energy eigenstate wave function of the quantum harmonic oscillator with Hermite polynomial. (arXiv:2601.00293)",
		"latex": String.raw`\psi_n(x) = \left(\frac{\alpha}{\sqrt{\pi}\,2^n n!}\right)^{1/2}e^{-\alpha^2 x^2/2}H_n(x)`
	},
	{
		"title": "Quantile Correlation Coefficient",
		"description": "Correlation between two quantile functions, measuring shape similarity of distributions. (arXiv:1110.2295)",
		"latex": String.raw`\rho_{i,i'} = \frac{\int_0^1\left(\Phi_i^{-1}(t)-\mu_i\right)\left(\Phi_{i'}^{-1}(t)-\mu_{i'}\right)dt}{\sigma_i\sigma_{i'}}`
	},
	{
		"title": "Wasserstein Covariance",
		"description": "Empirical covariance between two symbolic variables based on the ℓ₂ Wasserstein metric. (arXiv:1110.2295)",
		"latex": String.raw`C_W(Y_1,Y_2) = \frac{1}{n}\sum_{i=1}^n\int_0^1\left[\Phi_{i1}^{-1}(t)-\bar{\Phi}_1^{-1}(t)\right]\left[\Phi_{i2}^{-1}(t)-\bar{\Phi}_2^{-1}(t)\right]dt`
	},
	{
		"title": "Quartic Perturbation Wavefunction",
		"description": "Perturbed ground state wave function under a quartic (x³-force) market potential. (arXiv:2601.00293)",
		"latex": String.raw`\psi_g(x) = \frac{C}{(2\pi)^{1/4}}e^{-x^2/4}\left[1-\frac{\gamma}{4\sqrt{2}\hbar\omega}(x^4-9)\right]`
	},
	{
		"title": "Wasserstein Standard Deviation",
		"description": "Standard deviation of a symbolic variable based on the ℓ₂ Wasserstein metric. (arXiv:1110.2295)",
		"latex": String.raw`S_W(Y) = \sqrt{\left[\frac{1}{n}\sum_{i=1}^n\mu_i^2-\mu_{\bar{y}}^2\right]+\left[\frac{1}{n}\sum_{i=1}^n\sigma_i^2-\frac{1}{n^2}\sum_{i=1}^n\sum_{j=1}^n\rho_{i,j}\sigma_i\sigma_j\right]}`
	},
];
