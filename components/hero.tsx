"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, BarChart3, LineChart, TrendingUp } from "lucide-react";

export default function Hero() {
	const [isVisible, setIsVisible] = useState(false);
	const [currentWord, setCurrentWord] = useState(0);
	const words = ["Revenue", "Growth", "Success", "Impact"];

	useEffect(() => {
		setIsVisible(true);
		const interval = setInterval(() => {
			setCurrentWord((prev) => (prev + 1) % words.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
			{/* Refined background with theme colors */}
			<div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30"></div>

			{/* Elegant floating shapes */}
			<div className="absolute top-20 right-[10%] w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse-glow"></div>
			<div
				className="absolute bottom-20 left-[5%] w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl animate-pulse-glow"
				style={{ animationDelay: "1.5s" }}></div>
			<div
				className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"
				style={{ animationDelay: "3s" }}></div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Left Content */}
					<div className="space-y-8">
						{/* Premium badge */}
						<div
							className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 transition-all duration-700 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 -translate-y-4"
							}`}>
							<div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
							<span className="text-sm font-medium text-primary">
								Award-Winning Digital Solutions
							</span>
						</div>

						{/* Main heading with dynamic word */}
						<div
							className={`transition-all duration-700 delay-100 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}>
							<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4">
								Accelerate Your
								<br />
								<span className="relative inline-block">
									<span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
										{words[currentWord]}
									</span>
									<div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full transform scale-x-0 animate-[scale-x_0.5s_ease-in-out_infinite]"></div>
								</span>
							</h1>
							<p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-xl">
								Transform your digital presence with strategic marketing,
								compelling design, and measurable results that drive real
								business growth.
							</p>
						</div>

						{/* CTA Buttons */}
						<div
							className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}>
							<Link
								href="#contact"
								className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 overflow-hidden">
								<span className="relative z-10">Start Your Journey</span>
								<ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
								<div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</Link>
							<Link
								href="#portfolio"
								className="px-8 py-4 border-2 border-border hover:border-primary text-foreground rounded-xl font-semibold text-lg hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2">
								<span>View Portfolio</span>
							</Link>
						</div>

						{/* Stats with icons */}
						<div
							className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-700 delay-300 ${
								isVisible
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}>
							<div className="text-center">
								<div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
									250+
								</div>
								<div className="text-sm text-muted-foreground">Projects</div>
							</div>
							<div className="text-center border-x border-border">
								<div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
									98%
								</div>
								<div className="text-sm text-muted-foreground">
									Success Rate
								</div>
							</div>
							<div className="text-center">
								<div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
									5x
								</div>
								<div className="text-sm text-muted-foreground">Avg. ROI</div>
							</div>
						</div>
					</div>

					{/* Right Content - Feature Cards */}
					<div
						className={`relative transition-all duration-700 delay-400 ${
							isVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-8"
						}`}>
						<div className="grid grid-cols-2 gap-6">
							{/* Card 1 */}
							<div className="col-span-2 bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
								<div className="flex items-start gap-4">
									<div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
										<TrendingUp className="w-6 h-6 text-primary" />
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-semibold text-foreground mb-2">
											Strategic Growth
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											Data-driven strategies that convert visitors into loyal
											customers and maximize your revenue potential.
										</p>
									</div>
								</div>
							</div>

							{/* Card 2 */}
							<div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
								<div className="p-3 bg-accent/10 rounded-xl w-fit mb-4 group-hover:bg-accent/20 transition-colors">
									<LineChart className="w-6 h-6 text-accent" />
								</div>
								<h3 className="text-lg font-semibold text-foreground mb-2">
									Analytics
								</h3>
								<p className="text-sm text-muted-foreground">
									Real-time insights and performance tracking.
								</p>
							</div>

							{/* Card 3 */}
							<div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
								<div className="p-3 bg-secondary/10 rounded-xl w-fit mb-4 group-hover:bg-secondary/20 transition-colors">
									<BarChart3 className="w-6 h-6 text-secondary" />
								</div>
								<h3 className="text-lg font-semibold text-foreground mb-2">
									Optimization
								</h3>
								<p className="text-sm text-muted-foreground">
									Continuous improvement for peak performance.
								</p>
							</div>
						</div>

						{/* Decorative elements */}
						<div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
						<div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
					</div>
				</div>
			</div>

			{/* Bottom fade */}
			<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
		</section>
	);
}
